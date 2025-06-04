import React, { useRef, useEffect, useState } from "react";

const boxes = [
    { title: "About Me", content: "A passionate developer with a love for modern web technologies." },
    { title: "Skills", content: "React, JavaScript, CSS, Node.js, and more." },
    { title: "Projects", content: "Check out my latest work and collaborations." },
    { title: "Contact", content: "Let's connect and build something amazing together!" },
];

const Intro = () => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // useEffect to handle scroll-based visibility and animation
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            // If the component is in the viewport, show animation
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                setVisible(true);
            } else {
                // If the component is out of the viewport, hide animation
                setVisible(false);
            }
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount in case component is already in view
        handleScroll();

        // Cleanup event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                gap: "2rem",
                padding: "4rem 2rem",
                minHeight: "60vh",
                background: "#f8f9fa",
            }}
        >
            {boxes.map((box, idx) => (
                <div
                    key={box.title}
                    style={{
                        flex: 1,
                        background: "#fff",
                        borderRadius: "1.5rem",
                        boxShadow: "0 8px 32px rgba(60,60,60,0.12)",
                        padding: "2rem",
                        margin: "0 0.5rem",
                        opacity: visible ? 1 : 0,
                        transform: visible
                            ? "translateX(0)"
                            : "translateX(-80px)",
                        transition: `all 0.7s cubic-bezier(.77,0,.18,1) ${idx * 0.15 + 0.2}s`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <h2 style={{ marginBottom: "1rem", fontWeight: 700, color: "#222" }}>{box.title}</h2>
                    <p style={{ color: "#555", fontSize: "1.1rem" }}>{box.content}</p>
                </div>
            ))}
        </div>
    );
};


export default Intro;