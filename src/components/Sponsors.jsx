import React from 'react';

const Sponsors = () => {
    // 4 columns, 8 rows = 32 slots approximately
    const slots = Array.from({ length: 32 }, (_, i) => i);

    return (
        <section id="sponsors" style={{ padding: '80px 0', background: '#000' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2rem' }}>SPONSORS</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '15px',
                    padding: '0 50px' // Add some horizontal buffer
                }}>
                    {slots.map((item) => (
                        <div key={item} style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            background: '#222',
                            borderRadius: '0', // Square
                            border: '1px solid #333'
                        }}>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
