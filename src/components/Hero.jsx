import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            background: 'radial-gradient(circle at 60% 40%, rgba(30, 30, 80, 0.4) 0%, rgba(10, 10, 10, 1) 70%)',
        }}>
            <div className="container">

                {/* Logo and Big Title Area */}
                <div style={{ marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                        {/* Swirl Icon recreation */}
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'conic-gradient(from 0deg, #fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c)',
                            filter: 'blur(2px)'
                        }}></div>
                        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '2px', lineHeight: '1' }}>SUMMIT</h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '10px'
                        }}>
                            INNOVATING FOR <span style={{ color: '#ff0055' }}>INCLUSION</span>
                        </div>

                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '500px',
                            marginBottom: '30px',
                            lineHeight: '1.4'
                        }}>
                            Driving awareness and innovation for a more inclusive future through technology and accessibility.
                        </p>

                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '30px' }}>
                            12th February 2026
                        </div>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button className="btn" style={{ background: 'blue', borderRadius: '5px' }}>Register</button>
                            <button className="btn" style={{ background: 'transparent', border: '1px solid blue', borderRadius: '5px' }}>Learn More</button>
                        </div>
                    </motion.div>
                </div>

                {/* Spiral/DNA abstract graphic on right - Placeholder */}
                <div style={{
                    position: 'absolute',
                    right: '0',
                    top: '20%',
                    width: '40%',
                    height: '60%',
                    background: 'linear-gradient(90deg, transparent, rgba(0,123,255,0.1))',
                    zIndex: -1,
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' // Just a shape to mimic visual interest
                }}></div>

            </div>
        </section>
    );
};

export default Hero;
