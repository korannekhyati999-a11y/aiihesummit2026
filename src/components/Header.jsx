import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            padding: '20px 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                {/* Logo Area */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Small version of the swirl icon */}
                    <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: 'conic-gradient(from 0deg, #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c)',
                    }}></div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>SUMMIT</span>
                </div>

                <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#aaa', textTransform: 'uppercase' }}>
                    <a href="#about" style={{ padding: '0 10px' }}>About</a>
                    <a href="#events" style={{ padding: '0 10px' }}>Events</a>
                    <a href="#agenda" style={{ padding: '0 10px' }}>Agenda</a>
                </div>

                <button className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px', background: '#0056b3' }}>Register</button>
            </div>
        </header>
    );
};

export default Header;
