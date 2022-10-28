import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChield?: boolean;
    className?: string;
}

export function Text ({size = 'md', children, asChield, className}: TextProps) {
    const Comp = asChield ? Slot : 'span';
    return (
        <Comp 
            className={clsx(
                "font-sans",
                {'text-gray-100': !asChield},
                {
                    'text-xs': size==='sm',
                    'text-sm': size==='md',
                    'text-md': size==='lg',
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}