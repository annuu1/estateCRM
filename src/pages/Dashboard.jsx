import React, { useState, useEffect } from "react";
import styles from "../assets/css/dashboard.module.css";

const Dashboard = () => {
    const [followUps, setFollowUps] = useState([]);
    const [visits, setVisits] = useState([]);

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

        const fetchVisits = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbz_ttqSToHOVk0Y8c1WVE1YkOA63YLHaRrS-YI_vklE7OpUiCNssHrN65TYSoEFEZ_Ujw/exec?action=getVisits');
                const data = await response.json();
                setVisits(data);
            } catch (error) {
                console.error('Error fetching visits:', error);
            }
        };

        fetchFollowUps();
        fetchVisits();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <div className={styles.card}>
                <p> {followUps.length} </p>
                <h2>Follow-ups</h2>
            </div>
            <div className={styles.card}>
                <p> {visits.length} </p>
                <h2>Visits</h2>
            </div>
            <h2>Follow Ups</h2>
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

            <h2>Visits</h2>
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
                    {visits.map(visit => (
                        <tr key={visit.ID} style={{ border: '1px solid #ddd' }}>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{visit.ID}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{visit.ClientName}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{visit.Phone}</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{visit.InterestedIn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;