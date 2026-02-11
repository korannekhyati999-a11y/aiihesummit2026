import React from 'react';

const Guests = () => {
    return (
        <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Our Recent Guests</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '20px',
                    justifyItems: 'center'
                }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} style={{
                            width: '100%',
                            maxWidth: '150px',
                            aspectRatio: '1/1',
                            background: 'var(--bg-primary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <span style={{ color: 'var(--text-secondary)' }}>Guest {item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guests;
