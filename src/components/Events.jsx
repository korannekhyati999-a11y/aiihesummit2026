import React from 'react';

const Events = () => {
    const events = [
        { title: "AI AND A11Y", color: "#fd004c" },
        { title: "SOLVE A-THON", color: "#fe9000" },
        { title: "HACK HERO", color: "#3363ff" },
        { title: "IDEATHON", color: "#3edf4b" }
    ];

    // Placeholder for bottom large box
    const workshop = { title: "WORKSHOPS", color: "#b102b7" };

    return (
        <section id="events" style={{ padding: '80px 0', background: '#000' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px', fontSize: '3rem' }}>EVENTS</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '30px',
                    marginBottom: '30px'
                }}>
                    {events.slice(0, 3).map((item, index) => (
                        <div key={index} style={{
                            height: '300px',
                            background: '#111',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            border: '1px solid #222'
                        }}>
                            {/* Colored Top Border */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: item.color }}></div>

                            <h3 style={{
                                fontSize: '1.8rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                color: '#fff',
                                textAlign: 'center'
                            }}>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Second Row Grid logic to match 3-2 layout if desired, typically blueprints have specific grids. 
                    Assuming a T-shape or similar based on typical layouts */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '30px'
                }}>
                    {/* Use empty divs or specific layout for the "inverted T" or similar complex grid */}
                    <div style={{
                        background: '#111',
                        height: '300px',
                        border: '1px solid #222',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: events[3].color }}></div>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff' }}>{events[3].title}</h3>
                    </div>

                    <div style={{
                        background: '#111',
                        height: '300px',
                        border: '1px solid #222',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        gridColumn: 'span 2' // Make this one wider
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: workshop.color }}></div>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff' }}>{workshop.title}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
