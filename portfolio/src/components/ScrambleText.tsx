'use client';

import { useEffect, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

interface ScrambleTextProps {
    text: string;
    className?: string;
}

export default function ScrambleText({ text, className = '' }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        const startScramble = () => {
            setIsScrambling(true);
            iteration = 0;

            interval = setInterval(() => {
                setDisplayText(prev =>
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setIsScrambling(false);
                }

                iteration += 1 / 3; // Speed of resolving
            }, 30);
        };

        // Start initial scramble
        startScramble();

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className={`${className} font-mono`}>
            {displayText}
        </span>
    );
}
