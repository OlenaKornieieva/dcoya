import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebarContainer'>
            <div className='d-flex justify-content-start companyName'>
                <h2 className='pl-4'>DCOYA</h2>
                <i className="toggleBtn fas fa-bars align-self-center pl-3 pb-1"/>
            </div>
            <ul className='menu pt-3'>
                <li className='d-flex justify-content-start'>
                    <i className="fas fa-home"/>
                    <h6 className='menuName'>DASHBOARD</h6>
                </li>
                <li className='d-flex justify-content-start'>
                    <i className="fas fa-crosshairs"/>
                    <h6 className='menuName'>CAMPAIGNS</h6>
                </li>
                <li className='d-flex justify-content-start'>
                    <i className="fas fa-code-branch"/>
                    <h6 className='menuName'>INSIGHTS</h6>
                </li>
                <li className='d-flex justify-content-start'>
                    <i className="fas fa-chart-pie"/>
                    <h6 className='menuName'>REPORTING</h6>
                </li>
                <li className='d-flex justify-content-start'>
                    <i className="fas fa-cog"/>
                    <h6 className='advantive'>ADVANTIVE</h6>
                </li>
                <li className='d-flex justify-content-start pl-3'>
                    <h6 className='pl-3 subMenu'>EVENTS</h6>
                </li>
                <li className='d-flex justify-content-start pl-3'>
                    <h6 className='pl-3 subMenu'>DEPLOYMENT</h6>
                </li>
                <li className='d-flex justify-content-start pl-3'>
                    <h6 className='pl-3 subMenu'>SETTINGS</h6>
                </li>
                <li className='d-flex justify-content-start pl-3'>
                    <h6 className='pl-3 subMenu'>RULES</h6>
                </li>
                <li className='d-flex justify-content-start'>
                    <i className="fas fa-copy"/>
                    <h6 className='menuName'>Templates</h6>
                </li>
            </ul>
        </div>
    )
};
export default Sidebar;