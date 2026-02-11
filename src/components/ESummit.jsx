import React from 'react';

const ESummit = () => {
    return (
        <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">E-SUMMIT</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    The "Accessibility Summit 2026" is a flagship event dedicated to exploring the intersection of Artificial Intelligence and Accessibility.
                    Join us as we bring together industry leaders, innovators, and advocates to discuss how technology can create a more inclusive world.
                    <br /><br />
                    This year's theme focuses on "AI for Good", showcasing cutting-edge solutions that empower individuals with disabilities.
                </p>
            </div>
        </section>
    );
};

export default ESummit;
