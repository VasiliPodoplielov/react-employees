import React, {useState, useEffect} from 'react';
import styles from './employee-styles.css'
import PropTypes from "prop-types";


function Employee(props) {
    const {firstName, lastName, days, rate} = props.info;
    const [daysState, setDays] = useState(days);
    const [rateState, setRate] = useState(rate);
    const [salaryState, setSalary] = useState(0);

    // calculateSalary();

    function onChangeInput(e) {
        let inputId = e.target.id;
        if (inputId === 'days') {
            setDays(e.target.value);
        } else if (inputId === 'rate') {
            setRate(e.target.value);
        }
    }

    useEffect(() => {
        calculateSalary();
    });

    function calculateSalary() {
        if (daysState && rateState) {
            setSalary(daysState * rateState);
        } else {
            setSalary(0);
        }
    }

    return (
        <tr className='employee__item'>
            <td className="employee__first-name">{firstName}</td>
            <td className="employee__last-name">{lastName}</td>
            <td className="employee__days"><input id="days" type="text" onChange={onChangeInput} value={daysState}/></td>
            <td className="employee__rate"><input id="rate" type="text" onChange={onChangeInput} value={rateState}/></td>
            <td className="employee__salary">{salaryState}</td>
        </tr>
    );
}

export default Employee;

Employee.propTypes = {
    props: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        days: PropTypes.number,
        rate: PropTypes.number
    })
};