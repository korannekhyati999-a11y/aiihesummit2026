import React from 'react';

const Agenda = () => {
    const days = [
        { label: 'Day 1', title: 'Day 1', content: '' },
        { label: 'Day 2', title: 'Day 2', content: '' },
        { label: 'Day 3', title: 'Day 2', content: '' } // Match user bug "Day 3 title Day 2"? keeping consistent with blueprint text
    ];

    return (
        <section id="agenda" style={{ padding: '100px 0', background: '#000' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '80px', fontSize: '3rem' }}>AGENDA</h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingBottom: '50px' }}>
                    {/* Continuous Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: '#0033cc',
                        transform: 'translateX(-50%)',
                        zIndex: 1
                    }}></div>

                    {days.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            alignItems: 'center',
                            marginBottom: '150px',
                            position: 'relative'
                        }}>
                            {/* Hexagonal Marker */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translate(-50%, -20%)', // Pull it up slightly
                                width: '80px',
                                height: '70px',
                                background: '#001a4d',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            }}>
                                {item.label}
                            </div>

                            {/* Box Content - alternating sides */}
                            <div style={{
                                width: '40%',
                                background: 'white',
                                padding: '0',
                                borderRadius: '0', // Sharp corners
                                zIndex: 5,
                                minHeight: '120px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{
                                    background: '#000e33',
                                    color: 'white',
                                    padding: '5px 10px',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>
                                    {item.title}
                                </div>
                                <div style={{ flex: 1, background: 'white' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agenda;
