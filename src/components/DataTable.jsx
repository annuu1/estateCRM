import React from 'react';
import styles from '../assets/css/table.module.css';

const DataTable = ({ headers, keys, data }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {keys.map((key, cellIndex) => (
                            <td key={cellIndex}>{row[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
