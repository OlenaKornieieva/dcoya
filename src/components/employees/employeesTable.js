import React from 'react';
import './employeesTable.css';
import AddRow from "../addRow/addRow";
import $ from 'jquery';

export default class EmployeeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: [...this.props.employee],
            term: '',
            filtered: [],
            currentPage: 1,
            employeePerPage: 10,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3
        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }

    componentDidUpdate() {
        $("ul li.active").removeClass('active');
        $('ul li#' + this.state.currentPage).addClass('active');
    }

    handleClick(event) {
        let listId = Number(event.target.id);
        this.setState({
            currentPage: listId
        });
        $("ul li.active").removeClass('active');
        $('ul li#' + listId).addClass('active');
        this.setPrevAndNextBtnClass(listId);
    }

    setPrevAndNextBtnClass(listId) {
        let totalPage = Math.ceil(this.state.employee.length / this.state.employeePerPage);
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if (totalPage === listId && totalPage > 1) {
            this.setState({isPrevBtnActive: ''});
        } else if (listId === 1 && totalPage > 1) {
            this.setState({isNextBtnActive: ''});
        } else if (totalPage > 1) {
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
    }

    btnIncrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listId = this.state.upperPageBound + 1;
        this.setState({currentPage: listId});
        this.setPrevAndNextBtnClass(listId);
    }

    btnDecrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        let listId = this.state.upperPageBound - this.state.pageBound;
        this.setState({currentPage: listId});
        this.setPrevAndNextBtnClass(listId);
    }

    btnPrevClick() {
        if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
            this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        }
        let listId = this.state.currentPage - 1;
        this.setState({currentPage: listId});
        this.setPrevAndNextBtnClass(listId);
    }

    btnNextClick() {
        if ((this.state.currentPage + 1) > this.state.upperPageBound) {
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listId = this.state.currentPage + 1;
        this.setState({currentPage: listId});
        this.setPrevAndNextBtnClass(listId);
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.firstName.toLowerCase().indexOf(term) > -1
                || item.lastName.toLowerCase().indexOf(term) > -1
                || item.email.toLowerCase().indexOf(term) > -1
                || item.phoneNumber.toLowerCase().indexOf(term) > -1
                || item.department.toLowerCase().indexOf(term) > -1
                || item.role.toLowerCase().indexOf(term) > -1
                || item.manager.toLowerCase().indexOf(term) > -1
                || item.branch.toLowerCase().indexOf(term) > -1
                || item.country.toLowerCase().indexOf(term) > -1
                || item.group.toLowerCase().indexOf(term) > -1;
        })
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.employee];
        arrayCopy.sort(this.compareBy(key));
        this.setState({employee: arrayCopy});
    }

    render() {
        const input =
            <div id='custom-search-input' className='m-0 pr-2 pl-2 pb-2'>
                <div className="input-group">
                    <input type="text"
                           value={this.state.term}
                           onChange={(e) => this.setState({term: e.target.value})}
                           className="inputTitle search-query form-control border-top-0 border-right-0 border-left-0 rounded-0"/>
                    <span className="input-group-btn">
        <button type="button" disabled>
        <span className="fa fa-search"/>
        </button>
        </span>
                </div>
            </div>;
        const {
            term, employee, currentPage, employeePerPage, upperPageBound,
            lowerPageBound, isPrevBtnActive, isNextBtnActive} = this.state;
        const {onRowUpdate, tableLabel} = this.props;
        const indexOfLastEmployee = currentPage * employeePerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
        const currentEmployee = employee.slice(indexOfFirstEmployee, indexOfLastEmployee);
        const visibleItems = this.search(currentEmployee, term);

        const renderEmployee = visibleItems.map((employee, index) => {
            const {
                id, firstName, lastName, email, phoneNumber, department,
                role, manager, branch, country, group
            } = employee;
            if (visibleItems) {
                return (
                    <tr key={index}>
                        <td className='id text-center'>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                        <td>{department}</td>
                        <td>{role}</td>
                        <td>{manager}</td>
                        <td>{branch}</td>
                        <td>{country}</td>
                        <td>{group}</td>
                    </tr>
                );
            }
            return (<AddRow onRowUpdate={onRowUpdate}
                            employee={employee}
                            key={employee.id}/>)
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(employee.length / employeePerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                    <li key={number} className='active' id={number}>
                        <a href='#' id={number}
                           onClick={this.handleClick}>{number}
                        </a>
                    </li>
                )
            } else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <li key={number} id={number}>
                        <a href='#' id={number}
                           onClick={this.handleClick}>{number}
                        </a>
                    </li>
                )
            }
        });
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
            pageIncrementBtn =
                <li className=''>
                    <a href='#' onClick={this.btnIncrementClick}> &hellip; </a>
                </li>
        }
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
            pageDecrementBtn =
                <li className=''>
                    <a href='#' onClick={this.btnDecrementClick}> &hellip; </a>
                </li>
        }
        let renderPrevBtn = null;
        if (isPrevBtnActive === 'disabled') {
            renderPrevBtn =
                <li className={isPrevBtnActive}>
                    <span id="btnPrev"> Prev </span>
                </li>
        } else {
            renderPrevBtn =
                <li className={isPrevBtnActive}>
                    <a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a>
                </li>
        }
        let renderNextBtn = null;
        if (isNextBtnActive === 'disabled') {
            renderNextBtn =
                <li className={isNextBtnActive}>
                    <span id="btnNext"> Next </span>
                </li>
        } else {
            renderNextBtn =
                <li className={isNextBtnActive}>
                    <a href='#' id="btnNext"
                       onClick={this.btnNextClick}> Next
                    </a>
                </li>
        }

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        {tableLabel.map((element, index) => {
                            return <th key={index}
                                       className='title'
                                       onClick={() => this.sortBy('id')}>
                                {element}
                                {input}
                            </th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {renderEmployee}
                    </tbody>
                </table>
                <ul className="pagination justify-content-center pt-2">
                    {renderPrevBtn}
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    {renderNextBtn}
                </ul>
            </div>
        )
    }
};
