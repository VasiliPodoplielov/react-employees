import React, {useState} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Employees from "./components/Employees/Employees";

import styles from './css/main.css'

function App() {
        return (
        <table className="App">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Отработаных дней</th>
                    <th>Ставка в день</th>
                    <th>Заработная плата</th>
                </tr>
            </thead>
            <Employees info={EMPLOYEESINFO}
            />
        </table>
    );
}

export default App;

const EMPLOYEESINFO = [
    {
        id: 1,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 9
    },
    {
        id: 2,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 12
    },
    {
        id: 3,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 11
    },
    {
        id: 4,
        firstName: 'Bob',
        lastName: 'Marley',
        days: 29,
        rate: 25
    },
];

EMPLOYEESINFO.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    days: PropTypes.number,
    rate: PropTypes.number
};