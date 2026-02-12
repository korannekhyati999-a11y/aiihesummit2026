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
            paddingTop: '60px', // Compensate for fixed header
            background: 'radial-gradient(circle at 70% 20%, rgba(20, 20, 50, 0.6) 0%, rgba(0, 0, 0, 1) 70%)',
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <div style={{ textAlign: 'left', maxWidth: '800px' }}>
                    {/* Logo Row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '1rem' }}>

                        <motion.h1
                            style={{
                                fontSize: '5.5rem',
                                fontWeight: '900',
                                letterSpacing: '4px',
                                lineHeight: '1',
                                margin: 0,
                                textTransform: 'uppercase',
                                display: 'flex',
                                overflow: 'hidden'
                            }}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3, // Slower stagger
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {Array.from("SUMMIT").map((char, index) => {
                                const colors = ["#fd004c", "#fe9000", "#fff020", "#3edf4b", "#3363ff", "#b102b7"];
                                return (
                                    <motion.span
                                        key={index}
                                        style={{ color: colors[index % colors.length] }}
                                        variants={{
                                            hidden: { opacity: 0, x: '-100vw' }, // Extreme left
                                            visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } } // Slow entry
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })}
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '1rem',
                            color: '#fff'
                        }}>
                            INNOVATING FOR <span style={{ color: '#ff0055', textShadow: '0 0 10px rgba(255, 0, 85, 0.5)' }}>INCLUSION</span>
                        </div>

                        <p style={{
                            fontSize: '1.1rem',
                            color: '#ccc',
                            maxWidth: '600px',
                            marginBottom: '40px',
                            lineHeight: '1.6',
                            borderLeft: '4px solid #007bff',
                            paddingLeft: '20px'
                        }}>
                            Join us for the world's leading event on accessibility and AI.
                            Where technology meets humanity to create a barrier-free future.
                        </p>

                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            marginBottom: '40px',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <span style={{ color: '#007bff' }}>//</span> 12th February 2026
                        </div>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button className="btn" style={{
                                background: '#0056b3',
                                padding: '15px 40px',
                                fontSize: '1rem',
                                borderRadius: '0' // Sharp corners for modern feel
                            }}>REGISTER NOW</button>
                            <button className="btn" style={{
                                background: 'transparent',
                                border: '1px solid #fff',
                                padding: '15px 40px',
                                fontSize: '1rem',
                                borderRadius: '0'
                            }}>Watch Video</button>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Decorative Grid Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 0,
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1), transparent)',
            }}></div>
        </section>
    );
};

export default Hero;
