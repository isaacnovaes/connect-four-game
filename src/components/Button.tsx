import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Color = 'white' | 'pink' | 'yellow';

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
    readonly type: 'submit' | 'reset' | 'button';
    readonly children: ReactNode;
    readonly color: Color;
    readonly isIcon?: boolean;
}

const colors: Record<Color, string> = {
    pink: 'bg-pink text-white',
    white: 'bg-white',
    yellow: 'bg-yellow',
};

const Button = (props: Props) => {
    const { type, children, color, isIcon, className, ...rest } = props;

    const classes = `${colors[color]} w-full hover:scale-110 shadow-box hover:shadow-purple-dark hover:border-purple-dark flex cursor-pointer items-center justify-between gap-x-3 rounded-[20px] border-2 border-black p-2 leading-11 motion-safe:transition-all motion-safe:duration-300 ${className ?? ''}`;

    return (
        <button
            type={type}
            {...rest}
            className={`${isIcon ? `${className ?? ''} w-full hover:scale-110 hover:cursor-pointer` : classes} `}
        >
            {children}
        </button>
    );
};
export default Button;
