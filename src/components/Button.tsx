import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Color = 'white' | 'pink' | 'yellow';

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
    readonly type: 'submit' | 'reset' | 'button';
    readonly children: ReactNode;
}

interface SmallButtonProps extends Omit<Props, 'className'> {
    readonly buttonMode: 'small';
}

interface ButtonProps extends Props {
    readonly buttonMode: 'normal';
    readonly color: Color;
}

interface ButtonIconProps extends Props {
    readonly buttonMode: 'icon';
}

const colors: Record<Color, string> = {
    pink: 'bg-pink text-white',
    white: 'bg-white',
    yellow: 'bg-yellow',
};

const Button = (props: SmallButtonProps | ButtonIconProps | ButtonProps) => {
    const { children, type, ...rest1 } = props;

    if (props.buttonMode === 'small') {
        return (
            <button
                {...rest1}
                className='bg-purple-dark hover:bg-pink h-[39px] w-[108px] rounded-[20px] text-xs text-white uppercase transition-all duration-300 hover:scale-105 hover:cursor-pointer'
                type={type}
            >
                {children}
            </button>
        );
    }

    if (props.buttonMode === 'icon') {
        return (
            <button
                {...props}
                className={`${props.className ?? ''} w-full hover:cursor-pointer`}
                type={type}
            >
                {children}
            </button>
        );
    }
    const { className, ...rest } = props;

    const classes = `${colors[props.color]} w-full hover:scale-105 shadow-box hover:shadow-purple-dark hover:border-purple-dark flex cursor-pointer items-center justify-between gap-x-3 rounded-[20px] border-2 border-black p-2 leading-11 motion-safe:transition-all motion-safe:duration-300 ${className ?? ''}`;

    return (
        <button {...rest} className={classes} type={type}>
            {children}
        </button>
    );
};
export default Button;
