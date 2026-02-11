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
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '80px'
            }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Placeholder for Logo */}
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, var(--neon-blue), var(--neon-purple))', borderRadius: '50%' }}></div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SUMMIT</span>
                </div>

                <nav style={{ display: 'none' }}> {/* Hidden on mobile for now, can implement toggle */}
                    <ul style={{ display: 'flex', gap: '30px' }}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#agenda">Agenda</a></li>
                        <li><a href="#sponsors">Sponsors</a></li>
                    </ul>
                </nav>

                <button className="btn">Register</button>
            </div>
        </header>
    );
};

export default Header;
