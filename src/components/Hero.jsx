import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 123, 255, 0.1) 0%, rgba(10, 10, 10, 1) 70%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, var(--neon-blue), var(--neon-purple))', borderRadius: '50%' }}></div> {/* Logo Placeholder */}
                        <h1 style={{ fontSize: '5rem', fontWeight: '800', letterSpacing: '5px', lineHeight: '1' }}>SUMMIT</h1>
                    </div>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
                        ACCESSIBILITY FOR EVERYONE
                        <br />
                        <span style={{ color: 'var(--accent-blue)' }}>Theme: AI for Accessibility</span>
                    </p>

                    <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: 'var(--text-primary)' }}>12th February 2026</h2>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <button className="btn">Register Now</button>
                        <button className="btn" style={{ background: 'transparent', border: '1px solid var(--accent-blue)' }}>Learn More</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
