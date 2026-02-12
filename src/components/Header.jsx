import React from 'react';

const Header = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderBottom: '1px solid #222',
            padding: '15px 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* Logo Area */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Swirl Icon */}

                    <span style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px', color: '#fff' }}>SUMMIT</span>
                </div>

                <div style={{ display: 'flex', gap: '30px', fontSize: '0.9rem', color: '#ccc', textTransform: 'uppercase', fontWeight: '600' }}>
                    <a href="#about" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>About Us</a>
                    <a href="#events" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>Events</a>
                    <a href="#agenda" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>Agenda</a>
                </div>

                <button className="btn" style={{
                    fontSize: '0.9rem',
                    padding: '10px 25px',
                    background: '#0056b3',
                    borderRadius: '0',
                    fontWeight: 'bold'
                }}>REGISTER</button>
            </div>
        </header>
    );
};

export default Header;
