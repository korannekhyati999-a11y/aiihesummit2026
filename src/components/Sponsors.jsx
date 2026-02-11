import React from 'react';

const Sponsors = () => {
    // Generate a large grid of placeholders
    const slots = Array.from({ length: 40 }, (_, i) => i);

    return (
        <section id="sponsors" style={{ padding: '80px 0', background: '#000' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>SPONSORS</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                }}>
                    {slots.map((item) => (
                        <div key={item} style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            background: '#333', // Darker gray per image
                            borderRadius: '2px'
                        }}>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
