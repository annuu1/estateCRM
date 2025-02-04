import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import DataTable from '../components/DataTable'; // Importing the new DataTable component

export default function FollowUps() {
    const { followUps } = useContext(DataContext);

    return (
        <div>
            <Outlet />
            <h1>Follow Ups</h1>
            <NavLink to={'/followups/add'} className="addBtn">+</NavLink>
            <DataTable 
                headers={['Client Name', 'Phone', 'Interested In']} 
                keys={['ClientName', 'Phone', 'InterestedIn']} 
                data={followUps} 
            />
        </div>
    );
}
