import { getImageProps } from 'next/image';

interface BackgroundImageProps {
    src: string;
    alt: string;
    children: React.ReactNode;
    className?: string; // Additional classes for the container
}

/**
 * A container component that uses `getImageProps` to set a background image while maintaining optimization.
 */
export function BackgroundImage({
    src,
    alt,
    children,
    className,
}: BackgroundImageProps) {
    const common = { alt, width: 800, height: 400 };

    const {
        props: { srcSet, ...rest },
    } = getImageProps({
        ...common,
        src,
    });

    // We can also use this for multiple sources (art direction)
    // For now, simple background example

    return (
        <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
            <img
                srcSet={srcSet}
                {...rest}
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            {children}
        </div>
    );
}
