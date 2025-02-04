import React, {useState, useEffect} from 'react'
import tableStyles from "../assets/css/table.module.css";
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function Visits() {
    const {visits} = useContext(DataContext)

  return (
    <div >
      <Outlet/>
      <h1>Visits</h1>
      <NavLink to={'/visits/add'} className={tableStyles.addBtn}>+</NavLink>
      <table >
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Phone</th>
            <th>Interested In</th>
          </tr>
        </thead>
        <tbody>
          {visits.map(visit => (
            <tr key={visit.ID} >
              <td>{visit.ClientName}</td>
              <td>{visit.Phone}</td>
              <td>{visit.InterestedIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

