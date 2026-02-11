import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            background: 'var(--bg-secondary)'
        }}>
            <div className="container">
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>SUMMIT</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Instagram</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; 2026 All Rights Reserved. Accessibility Summit.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
