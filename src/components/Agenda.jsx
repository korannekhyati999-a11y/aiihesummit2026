import React from 'react';

const Agenda = () => {
    const days = [
        { day: 'Day 1', title: 'Opening Ceremony', description: 'Introduction to the summit and keynote speeches.' },
        { day: 'Day 2', title: 'Workshops & Hackathon', description: 'Hands-on sessions and coding challenges.' },
        { day: 'Day 3', title: 'Closing & Awards', description: 'Presentations, awards, and networking.' }
    ];

    return (
        <section id="agenda" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title">Agenda</h2>
                <div style={{ position: 'relative', marginTop: '50px' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--accent-blue)',
                        transform: 'translateX(-50%)'
                    }}></div>

                    {days.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                            marginBottom: '50px',
                            position: 'relative'
                        }}>
                            {/* Hexagon/Circle marker */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translate(-50%, -10%)',
                                width: '60px',
                                height: '60px',
                                background: 'var(--bg-primary)',
                                border: '2px solid var(--accent-blue)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                                color: 'var(--accent-blue)',
                                fontWeight: 'bold'
                            }}>
                                {item.day}
                            </div>

                            <div style={{
                                width: '45%',
                                background: 'var(--bg-secondary)',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                textAlign: index % 2 === 0 ? 'right' : 'left'
                            }}>
                                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agenda;
