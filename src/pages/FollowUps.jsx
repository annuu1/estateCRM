import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import tableStyles from "../assets/css/table.module.css";
import { Outlet } from 'react-router-dom';

export default function FollowUps() {
    const [followUps, setFollowUps] = useState([])

    useEffect(() => {
        const fetchFollowUps = async () => {
          try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz_ttqSToHOVk0Y8c1WVE1YkOA63YLHaRrS-YI_vklE7OpUiCNssHrN65TYSoEFEZ_Ujw/exec?action=getFollowups');
            const data = await response.json();
            setFollowUps(data);
          } catch (error) {
            console.error('Error fetching follow-ups:', error);
          }
        };
        fetchFollowUps();
      }, []);

  return (
    <div >
      <Outlet></Outlet>
      <h1>Follow Ups </h1>
      <NavLink to={'/followups/add'} className={tableStyles.addBtn }>+</NavLink>
      <table >
        <thead>
          <tr >
            <th>ID</th>
            <th>Client Name</th>
            <th>Phone</th>
            <th>Interested In</th>
          </tr>
        </thead>
        <tbody>
          {followUps.map(followUp => (
            <tr key={followUp.ID} >
              <td>{followUp.ID}</td>
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