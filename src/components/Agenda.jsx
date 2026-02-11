import React from 'react';

const Agenda = () => {
    const days = [
        { day: 'Day 1', date: '12th Feb', content: 'Inauguration & Keynotes' },
        { day: 'Day 2', date: '13th Feb', content: 'Workshops & Hackathon Begins' },
        { day: 'Day 3', date: '14th Feb', content: 'Project Showcase & Closing' }
    ];

    return (
        <section id="agenda" style={{ padding: '100px 0', background: '#050505' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '80px' }}>AGENDA</h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Center Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: '#0033cc', // Dark blue line
                        transform: 'translateX(-50%)',
                        zIndex: 1
                    }}></div>

                    {days.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start', // Alternate alignment
                            alignItems: 'center',
                            marginBottom: '100px',
                            position: 'relative'
                        }}>
                            {/* Hexagonal Marker on Center Line */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80px',
                                height: '70px',
                                background: '#001a4d', // Dark blue hexagon bg
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                color: 'white',
                                fontWeight: 'bold',
                                border: '2px solid #0044ff'
                            }}>
                                {item.day}
                            </div>

                            {/* Content Box */}
                            <div style={{
                                width: '40%',
                                padding: '20px',
                                background: 'white', // White boxes as per image? Or light gray? Image shows white boxes.
                                borderRadius: '4px',
                                color: 'black',
                                textAlign: 'center',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                                zIndex: 1
                            }}>
                                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{item.date}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#555' }}>High Contrast Box</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agenda;
