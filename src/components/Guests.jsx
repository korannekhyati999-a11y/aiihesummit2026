import React from 'react';

const Guests = () => {
    return (
        <section style={{ padding: '80px 0', background: '#000' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>OUR RECENT GUESTS</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)', // Strict 4 columns as per image
                    gap: '15px',
                }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} style={{
                            width: '100%',
                            aspectRatio: '1/1', // Square boxes
                            background: '#222', // Dark gray placeholder
                            borderRadius: '4px',
                            border: '1px solid #333'
                        }}>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guests;
