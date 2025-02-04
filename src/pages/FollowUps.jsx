import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import tableStyles from "../assets/css/table.module.css";
import { Outlet } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

export default function FollowUps() {
  let {followUps} = React.useContext(DataContext);

  return (
    <div >
      <Outlet></Outlet>
      <h1>Follow Ups </h1>
      <NavLink to={'/followups/add'} className={tableStyles.addBtn }>+</NavLink>
      <table >
        <thead>
          <tr >
            <th>Client Name</th>
            <th>Phone</th>
            <th>Interested In</th>
          </tr>
        </thead>
        <tbody>
          {followUps.map(followUp => (
            <tr key={followUp.ID} >
              <td>{followUp.ClientName}</td>
              <td>{followUp.Phone}</td>
              <td>{followUp.InterestedIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}