import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <div className="grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{
                            background: 'var(--bg-secondary)',
                            padding: '30px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ marginBottom: '15px' }}>Topic Title {item}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Use this space to describe the summit's mission and goals.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
