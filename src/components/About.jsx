import React from 'react';
import { Network, Users, Lightbulb } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Network size={32} color="#007bff" />, title: "CONNECT", text: "Network with industry leaders, professionals, and advocates in the accessibility space." },
        { icon: <Users size={32} color="#007bff" />, title: "COLLABORATE", text: "Join forces to solve real-world challenges and create impactful solutions." },
        { icon: <Lightbulb size={32} color="#007bff" />, title: "INNOVATE", text: "Explore cutting-edge technologies and ideas that are shaping the future of inclusion." }
    ];

    return (
        <section id="about" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>ABOUT US</h2>
                <div className="grid-cols-3">
                    {cards.map((item, index) => (
                        <div key={index} style={{
                            background: '#111',
                            padding: '30px',
                            borderRadius: '8px',
                            borderTop: '3px solid #007bff',
                            textAlign: 'left'
                        }}>
                            <div style={{ marginBottom: '20px' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '15px', color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase' }}>{item.title}</h3>
                            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
