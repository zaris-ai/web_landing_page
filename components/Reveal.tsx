'use client';

import { motion } from 'motion/react';
import React from 'react';

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.45,
                delay,
                ease: 'easeOut',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}