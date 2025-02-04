import React, { useState, useEffect } from "react";
import styles from "../assets/css/dashboard.module.css";
import tableStyles from "../assets/css/table.module.css";

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
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <p> {followUps.length} </p>
                    <h2>Follow-ups</h2>
                </div>
                <div className={styles.card}>
                    <p> {visits.length} </p>
                    <h2>Visits</h2>
                </div>
                <div className={styles.card}>
                    <p> {visits.length} </p>
                    <h2>Visits</h2>
                </div>
                <div className={styles.card}>
                    <p> {visits.length} </p>
                    <h2>Visits</h2>
                </div>
            </div>
            
            <h2>Follow Ups</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client Name</th>
                        <th>Phone</th>
                        <th>Interested In</th>
                    </tr>
                </thead>
                <tbody>
                    {followUps.map(followUp => (
                        <tr key={followUp.ID}>
                            <td>{followUp.ID}</td>
                            <td>{followUp.ClientName}</td>
                            <td>{followUp.Phone}</td>
                            <td>{followUp.InterestedIn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Visits</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client Name</th>
                        <th>Phone</th>
                        <th>Interested In</th>
                    </tr>
                </thead>
                <tbody>
                    {visits.map(visit => (
                        <tr key={visit.ID}>
                            <td>{visit.ID}</td>
                            <td>{visit.ClientName}</td>
                            <td>{visit.Phone}</td>
                            <td>{visit.InterestedIn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;