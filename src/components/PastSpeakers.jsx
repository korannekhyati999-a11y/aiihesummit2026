import React from 'react';

const PastSpeakers = () => {
    return (
        <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
            <div className="container">
                <h2 className="section-title">Past Speakers</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    textAlign: 'center'
                }}>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} style={{
                            padding: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.02)'
                        }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                margin: '0 auto 15px',
                                borderRadius: '50%',
                                background: '#333'
                            }}></div>
                            <h4 style={{ color: 'var(--text-primary)' }}>Speaker Name {item}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Title / Company</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastSpeakers;
