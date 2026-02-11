import React from 'react';

const Events = () => {
    const events = [
        { title: "AI & A11Y", color: "#fd004c" },
        { title: "SOLVE-A-THON", color: "#fe9000" },
        { title: "HACK-HERO", color: "#3363ff" },
        { title: "IDEATHON", color: "#3edf4b" },
        { title: "WORKSHOPS", color: "#b102b7" },
        { title: "PANEL DISCUSSION", color: "#fff020" }
    ];

    return (
        <section id="events" style={{ padding: '80px 0', background: '#050505' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>EVENTS</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    {events.map((item, index) => (
                        <div key={index} style={{
                            height: '250px',
                            background: '#151515',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #333',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <h3 style={{
                                zIndex: 2,
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: '#fff'
                            }}>
                                {item.title.split(' ')[0]} <span style={{ color: item.color }}>{item.title.split(' ')[1]}</span>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
