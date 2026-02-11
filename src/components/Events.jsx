import React from 'react';

const Events = () => {
    return (
        <section id="events" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title">Events</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} style={{
                            height: '200px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Gradient overlay for visual interest */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(135deg, transparent 0%, rgba(${item % 2 === 0 ? '0, 123, 255' : '111, 66, 193'}, 0.2) 100%)`
                            }}></div>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', zIndex: 1 }}>Event Name {item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
