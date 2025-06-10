/* eslint-disable react/button-has-type */
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
    if (props.buttonMode === 'small') {
        const { buttonMode: modeSmall, ...restSmall } = props;
        return (
            <button
                {...restSmall}
                className='bg-purple-dark hover:bg-pink h-[39px] w-[108px] rounded-[20px] text-xs text-white uppercase transition-all duration-300 hover:scale-105 hover:cursor-pointer'
                type={props.type}
            >
                {props.children}
            </button>
        );
    }

    if (props.buttonMode === 'icon') {
        const { buttonMode: modeIcon, className: smallClassName, ...restIcon } = props;
        return (
            <button
                {...restIcon}
                className={`${smallClassName ?? ''} w-full hover:cursor-pointer`}
                type={props.type}
            >
                {props.children}
            </button>
        );
    }
    const { className: normalClassName, buttonMode: modeNormal, color, ...rest } = props;

    const classes = `${colors[color]} w-full hover:scale-105 shadow-box hover:shadow-purple-dark hover:border-purple-dark flex cursor-pointer items-center justify-between gap-x-3 rounded-[20px] border-2 border-black p-2 leading-11 motion-safe:transition-all motion-safe:duration-300 ${normalClassName ?? ''}`;

    return (
        <button {...rest} className={classes} type={props.type}>
            {props.children}
        </button>
    );
};
export default Button;
