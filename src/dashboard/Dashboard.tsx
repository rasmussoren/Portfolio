import React from 'react';

const Dashboard = () => {
    return (
            <div style={{
                backgroundColor: 'white',
                padding: '24px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px'
            }}>
                <h1 style={{
                    fontSize: '24px',
                    color: 'black',
                    fontWeight: 'bold'
                }}>
                    Dashboard
                </h1>
                <p style={{ marginTop: '8px' }}>
                    Welcome to the dynamic dashboard.
                </p>
            </div>
        );
};

export default Dashboard;