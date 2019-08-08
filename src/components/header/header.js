import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='row'>
            <div className='col-12 d-flex justify-content-between'>
                <div className='col-2 mt-2 pl-0'>
                    <h5>EMPLOYEE</h5>
                    <h6 className='text-muted'>Dcoya / Employee</h6>
                </div>
                <div className='d-flex col-2 col-lg-2 justify-content-end'>
                    <div id="custom-search-input" className='search-input'>
                        <div className="input-group">
                            <input type="text" className="search-query form-control"/>
                            <span className="input-group-btn">
                        <button type="button" disabled>
                            <span className="fa fa-search"/>
                        </button>
                    </span>
                        </div>
                    </div>
                    <div className='d-flex align-self-center p-2 mt-2'>
                        <i className="far fa-bell text-muted"/>
                    </div>
                    <div className='d-flex align-self-center p-2 mt-2'>
                        <i className="fas fa-cog text-muted"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;