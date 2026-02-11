import React from 'react';
import { Network, Users, Lightbulb } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Network size={40} color="#007bff" />, title: "CONNECT", text: "Network with industry leaders, professionals, and advocates in the accessibility space." },
        { icon: <Users size={40} color="#007bff" />, title: "COLLABORATE", text: "Join forces to solve real-world challenges and create impactful solutions." },
        { icon: <Lightbulb size={40} color="#007bff" />, title: "INNOVATE", text: "Explore cutting-edge technologies and ideas that are shaping the future of inclusion." }
    ];

    return (
        <section id="about" style={{ padding: '80px 0', background: '#050505' }}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px', fontSize: '3rem' }}>ABOUT US</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {cards.map((item, index) => (
                        <div key={index} style={{
                            background: 'linear-gradient(145deg, #111, #0a0a0a)',
                            padding: '40px',
                            borderRadius: '0', // Sharp as per modern tech site
                            borderTop: '4px solid #0044ff',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            textAlign: 'left',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ marginBottom: '25px', background: 'rgba(0, 123, 255, 0.1)', display: 'inline-block', padding: '10px', borderRadius: '50%' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ marginBottom: '15px', color: '#fff', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '1px' }}>{item.title}</h3>
                            <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.6' }}>
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
