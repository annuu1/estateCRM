import React, {useState, useEffect} from 'react'

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
    <div style={{ padding: '20px' }}>
      <h1>Follow Ups</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Client Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Phone</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Interested In</th>
          </tr>
        </thead>
        <tbody>
          {followUps.map(followUp => (
            <tr key={followUp.ID} style={{ border: '1px solid #ddd' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{followUp.ID}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{followUp.ClientName}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{followUp.Phone}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{followUp.InterestedIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}