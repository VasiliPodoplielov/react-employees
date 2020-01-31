import React from 'react';
// import PropTypes from "prop-types";
import Employee from '../Employee/Employee';
import styles from './employees-styles.css'

function Employees(props) {

    function createCollection(collection) {
        return collection.map((item, i) => {
            return <Employee info={item} key={i} />
        });
    }

    return (
        <div className='eployees__collection'>
            {createCollection(props.info)}
        </div>
    );
}

export default Employees;


// Employees.propTypes = {
//     props: PropTypes.arrayOf({
//         id: PropTypes.number,
//         firstName: PropTypes.string,
//         lastName: PropTypes.string,
//         days: PropTypes.number,
//         rate: PropTypes.number
//     })
// };