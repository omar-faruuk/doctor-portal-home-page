import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faBook, faChartColumn,  faGear,  faPeopleGroup,  faShoppingBag} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/dashboard'>
                            <span><FontAwesomeIcon icon={faChartColumn} /></span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/appointment'>
                            <span><FontAwesomeIcon icon={faShoppingBag} /></span>
                            Appointment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/patients'>
                            <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                            Patients
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard'>
                            <span><FontAwesomeIcon icon={faBook} /></span>
                            Prescriptions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/adddoctor'>
                            <span><FontAwesomeIcon icon={faAdd} /></span>
                            Add doctor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard'>
                            <span><FontAwesomeIcon icon={faGear} /></span>
                            Setting
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;