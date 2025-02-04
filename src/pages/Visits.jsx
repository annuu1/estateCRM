import React, {useState, useEffect} from 'react'
import tableStyles from "../assets/css/table.module.css";

export default function Visits() {
    const [visits, setVisits] = useState([])

    useEffect(() => {
        const fetchVisits = async () => {
          try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz_ttqSToHOVk0Y8c1WVE1YkOA63YLHaRrS-YI_vklE7OpUiCNssHrN65TYSoEFEZ_Ujw/exec?action=getVisits');
            const data = await response.json();
            setVisits(data);
          } catch (error) {
            console.error('Error fetching follow-ups:', error);
          }
        };
        fetchVisits();
      }, []);

  return (
    <div >
      <h1>Visits</h1>
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
          {visits.map(visit => (
            <tr key={visit.ID} >
              <td>{visit.ID}</td>
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