'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteInfo } from '@/data/siteData';
import Link from 'next/link';

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = 'easeOut';

const glassButtonClass = cn(
    'inline-flex items-center justify-center px-5 py-2.5 rounded-full',
    'border border-white/30 hover:border-white/60',
    'bg-white/10 hover:bg-white/20 backdrop-blur-sm',
    'text-white text-sm font-semibold transition-all duration-300',
    'ring-1 ring-white/10 ring-offset-2 ring-offset-transparent',
    'hover:ring-white/20 hover:ring-offset-4 hover:ring-offset-black/20',
    'shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05),inset_0_0_2px_1px_rgba(255,255,255,0.2),0_0_10px_0_rgba(255,255,255,0.1)]',
    'hover:shadow-[inset_0_0_5px_1px_rgba(255,255,255,0.2),inset_0.5px_0.5px_1px_0.5px_rgba(255,255,255,0.5),0_0_12px_4px_rgba(255,255,255,0.5)]'
);

export const HeroSection = () => {
    const info = siteInfo;

    return (
        <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full pb-16 lg:pb-24 px-sides lg:gap-8">
            {/* Animated Title */}
            <motion.div
                layout="position"
                transition={{ duration: DURATION, ease: EASE_OUT }}
            >
                <h1 className="font-serif text-5xl italic sm:text-7xl lg:text-8xl 2xl:text-9xl text-white drop-shadow-lg text-center">
                    {info.title}
                </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DURATION, ease: EASE_OUT, delay: DELAY }}
                className="text-base sm:text-lg lg:text-xl !leading-[1.3] font-medium text-center text-white/90 text-pretty max-w-2xl"
            >
                {info.subtitle} — {info.heading}
            </motion.p>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DURATION, ease: EASE_OUT, delay: DELAY * 2 }}
                className="flex flex-wrap gap-3 items-center justify-center mt-4"
            >
                {info.socialLinks.items.map((link) => (
                    <Link
                        key={link._title}
                        href={link.link}
                        target="_blank"
                        className={glassButtonClass}
                    >
                        {link._title}
                    </Link>
                ))}

                {/* Email button */}
                {info.email && (
                    <Link
                        href={`mailto:${info.email}`}
                        className={glassButtonClass}
                    >
                        Contact
                    </Link>
                )}
            </motion.div>
        </div>
    );
};
