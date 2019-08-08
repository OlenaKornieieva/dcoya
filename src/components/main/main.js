import React from 'react';
import './main.css';
import EmployeeTable from "../employees/employeesTable";
import AddButton from "../addButton/addButton";

export default class Main extends React.Component {
    maxId = 100;
    constructor(props) {
        super(props);
        this.state = {
            tableLabel: [
                'ID','FIRST NAME','LAST NAME', 'EMAIL', 'PHONE NUMBER', 'DEPARTMENT', 'ROLE', 'MANAGER', 'BRANCH', 'COUNTRY', 'GROUP'
            ],
            employee: [
                {
                    id: 15,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 14,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 13,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 12,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 11,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 10,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 9,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 8,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 7,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 6,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 5,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 4,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 3,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 2,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                },
                {
                    id: 1,
                    firstName: 'Shay',
                    lastName: 'Gross',
                    email: 'Shay.gross@gmail.com',
                    phoneNumber: '+972-52-6474882',
                    department: 'Name Class',
                    role: 'CTO',
                    manager: 'Shimon Levi',
                    branch: 'Tel Aviv',
                    country: 'Israel',
                    group: 'Name'
                }
            ],
        };
    }

    handleAddRow() {
        const newEmployee = {
            id: this.maxId++,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            department: '',
            role: '',
            manager: '',
            branch: '',
            country: '',
            group: ''
        };
        this.setState({employee: [...this.state.employee, newEmployee]});
        console.log(this.state.employee)
    };

    handleRowUpdate(e) {
        const item = {
            id: e.target.id,
            firstName: e.target.name,
            lastName: e.target.value,
            email: e.target.value,
            phoneNumber: e.target.value,
            department: e.target.value,
            role: e.target.value,
            manager: e.target.value,
            branch: e.target.value,
            country: e.target.value,
            group: e.target.value,
        };
        const employee = this.state.employee.slice();
        const newEmployee = employee.map(function (employee) {

            for (let key in employee) {
                if (key === item.id && employee.firstName === item.firstName
                    && employee.lastName === item.lastName && employee.email === item.email
                    && employee.phoneNumber === item.phoneNumber && employee.department === item.department
                    && employee.role === item.role && employee.manager === item.manager
                    && employee.branch === item.branch && employee.country === item.country
                    && employee.group === item.group) {
                    employee[key] = item.value;
                }
            }
            return employee;
        });
        this.setState({employee: newEmployee});
    };

    getRandom (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    render() {
        return (
            <div className='row flex-column m-0 mr-2'>
                <div className='col-12 p-0'>
                    <div className='row d-flex justify-content-around m-0'>
                        <div className='col-12 headlinesBorder'>
                            <ul className='headlines d-flex justify-content-around'>
                                <li className='d-flex flex-wrap align-content-center'>
                                    <div className='align-self-center'>
                                        <i className="far fa-lightbulb pr-4 text-muted"/>
                                    </div>
                                    <div className='flex-column'>
                                        <h1>{this.getRandom(1, 1000)}</h1>
                                        <h6>Headline 1</h6>
                                    </div>
                                </li>
                                <li className='d-flex flex-wrap align-content-center'>
                                    <div className='align-self-center'>
                                        <i className="far fa-chart-bar pr-4 text-muted"/>
                                    </div>
                                    <div className='flex-column'>
                                        <h1>{this.getRandom(1, 1000)}</h1>
                                        <h6>Headline 2</h6>
                                    </div>
                                </li>
                                <li className='d-flex flex-wrap align-content-center'>
                                    <div className='align-self-center'>
                                        <i className="far fa-clock pr-4 text-muted"/>
                                    </div>
                                    <div className='flex-column'>
                                        <h1>{this.getRandom(1, 1000)}</h1>
                                        <h6>Headline 3</h6>
                                    </div>
                                </li>
                                <li className='d-flex flex-wrap align-content-center'>
                                    <div className='align-self-center'>
                                        <i className="far fa-envelope-open pr-4 text-muted"/>
                                    </div>
                                    <div className='flex-column'>
                                        <h1>{this.getRandom(1, 1000)}</h1>
                                        <h6>Headline 4</h6>
                                    </div>
                                </li>
                                <li className='d-flex flex-wrap align-content-center'>
                                    <div className='align-self-center'>
                                        <i className="far fa-envelope pr-4 text-muted"/>
                                    </div>
                                    <div className='flex-column'>
                                        <h1>{this.getRandom(1, 1000)}</h1>
                                        <h6>Headline 5</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <AddButton onRowAdd={this.handleAddRow.bind(this)}/>
                    <div className='tableBorder'>
                        <div className='row d-flex justify-content-around m-0'>
                            <div className='col-12'>
                                <div className='row d-flex justify-content-end m-0'>
                                    <i className="fas fa-print p-2 text-muted"/>
                                    <i className="far fa-file-pdf p-2 text-muted"/>
                                    <i className="far fa-file-excel p-2 text-muted"/>
                                    <i className="fas fa-ellipsis-h p-2 text-muted"/>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-around m-0'>
                            <div className='col-12 d-flex justify-content-around'>
                                <EmployeeTable
                                    onRowUpdate={this.handleRowUpdate.bind(this)}
                                    onRowAdd={this.handleAddRow.bind(this)}
                                    tableLabel={this.state.tableLabel}
                                    employee={this.state.employee}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


