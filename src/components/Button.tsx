import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps{
    children: ReactNode;
    asChield: boolean;
}

export function Button ({children, asChield}: ButtonProps) {
    const Comp = asChield ? Slot : 'button';
    return (
        <Comp 
            className={clsx(
                "py-4 py-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
              
            )}
        >
            {children}
        </Comp>
    )
}