import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Employees from "./components/Employees/Employees";

function App() {



    return (
        <div className="App">
            <Employees info={EMPLOYEESINFO} />
        </div>
    );
}

export default App;

const EMPLOYEESINFO = [
    {
        id: 1,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 15
    },
    {
        id: 2,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 15
    },
    {
        id: 3,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 15
    },
    {
        id: 4,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 15
    },
];

// EMPLOYEESINFO.propTypes = {
//     id: PropTypes.number,
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     days: PropTypes.number,
//     rate: PropTypes.number
// };