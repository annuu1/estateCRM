import React from 'react';
import styles from '../assets/css/table.module.css';
import { NavLink } from 'react-router-dom';

const DataTable = ({ headers, keys, data }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                        <th> Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {keys.map((key, cellIndex) => (
                            <td key={cellIndex}>{row[key]}</td>
                        ))}

                        <td>
                            <NavLink to={`https://wa.me/${row.Phone}`} target='_blank'> Wa Send</NavLink>
                            <NavLink to={`tel:${row.Phone}`} target='_blank'> Call</NavLink>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
