import React from 'react';
import styles from './employee-styles.css'
// import PropTypes from "prop-types";


function Employee(props) {
    const {firstName, lastName, days, rate} = props.info;

    return (
        <div className='employee__item'>
            <div className="employee__first-name">{firstName}</div>
            <div className="employee__last-name">{lastName}</div>
            <div className="employee__days">{days}</div>
            <div className="employee__rate">{rate}</div>
        </div>
    );
}

export default Employee;

// Employee.propTypes = {
//     props: PropTypes.shape({
//         id: PropTypes.number,
//         firstName: PropTypes.string,
//         lastName: PropTypes.string,
//         days: PropTypes.number,
//         rate: PropTypes.number
//     })
// };