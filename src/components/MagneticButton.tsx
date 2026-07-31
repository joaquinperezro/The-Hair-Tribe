import React, { useRef, useState, useEffect } from 'react';

export default function MagneticButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        
        element.addEventListener("mousemove", handleMouse);
        element.addEventListener("mouseleave", reset);
        
        return () => {
            element.removeEventListener("mousemove", handleMouse);
            element.removeEventListener("mouseleave", reset);
        };
    }, []);

    return (
        <button
            ref={ref}
            onClick={onClick}
            className={`transition-all duration-300 ease-out ${className}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            {children}
        </button>
    );
}
