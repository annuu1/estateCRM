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

    // Calculate open and closed counts for follow-ups and visits   
    const today = new Date();
    const openFollowUps = followUps.filter(f => f.Status === 'Open').length;
    const closedFollowUps = followUps.filter(f => f.Status === 'Closed').length;
    const recommendedFollowups = followUps.filter(f => new Date(f.ScheduledDate) <= today).length;
    const totalFollowUps = followUps.length;

    const openVisits = visits.filter(v => v.Status === 'Open').length;
    const closedVisits = visits.filter(v => v.Status === 'Closed').length;
    const totalVisits = visits.length;
    const recommendedVisits = visits.filter(f => new Date(f.ScheduledDate) <= today).length;
    // console.log(recommendedFollowups);
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>

            {/* Follow-ups Group */}
            <div><h3>Follow-Ups</h3></div>
            <div className={styles.cardsContainer}>
            <div className={styles.card}>
                    <p>{recommendedFollowups}</p>
                    <h2>Recommended</h2>
                </div>
                <div className={styles.card}>
                    <p>{openFollowUps}</p>
                    <h2>Open</h2>
                </div>
                <div className={styles.card}>
                    <p>{closedFollowUps}</p>
                    <h2>Closed</h2>
                </div>
                <div className={styles.card}>
                    <p>{totalFollowUps}</p>
                    <h2>Total</h2>
                </div>
            </div>

            {/* Visits Group */}
            <div><h3>Visits</h3></div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <p>{recommendedVisits}</p>
                    <h2>Recommended</h2>
                </div>
                <div className={styles.card}>
                    <p>{openVisits}</p>
                    <h2>Open</h2>
                </div>
                <div className={styles.card}>
                    <p>{closedVisits}</p>
                    <h2>Closed</h2>
                </div>
                <div className={styles.card}>
                    <p>{totalVisits}</p>
                    <h2>Total</h2>
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
                    {followUps.slice(-5).map(followUp => (
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
                    {visits.slice(-5).map(visit => (
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