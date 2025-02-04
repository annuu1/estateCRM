import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
        <DataContext.Provider value={{ followUps, visits }}>
            {children}
        </DataContext.Provider>
    );
};
