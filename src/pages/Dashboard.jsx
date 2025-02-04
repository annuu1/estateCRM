import React, { useState, useEffect } from "react";
import styles from "../assets/css/dashboard.module.css";
import tableStyles from "../assets/css/table.module.css";
import { DataContext } from "../context/DataContext";
import DataTable from "../components/DataTable"; // Importing the new DataTable component

const Dashboard = () => {
    const { followUps, visits } = React.useContext(DataContext);

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
<DataTable 
    headers={['Client Name', 'Phone', 'Interested In']} 
    keys={['ClientName', 'Phone', 'InterestedIn']} 
    data={followUps.slice(-5)} 
/>


            <h2>Visits</h2>
<DataTable 
    headers={['Client Name', 'Phone', 'Interested In']} 
    keys={['ClientName', 'Phone', 'InterestedIn']} 
    data={visits.slice(-5)} 
/>

        </div>
    );
};

export default Dashboard;
