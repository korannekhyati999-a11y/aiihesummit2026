import React from 'react';

const Sponsors = () => {
    return (
        <section id="sponsors" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title">Sponsors</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '40px',
                    justifyItems: 'center',
                    alignItems: 'center'
                }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} style={{
                            width: '120px',
                            height: '60px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>LOGO {item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
