import React, { ReactNode } from 'react';
import { Button, ButtonProps } from './styles';

interface RegularButtonProps extends ButtonProps {
    text: string,
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void,
    icon?: ReactNode,
}

export const RegularButton: React.FC<RegularButtonProps> = (
    {
        text,
        background,
        width,
        height,
        border,
        onClick,
        icon,
        left,
        right,
        top,
        bottom
    }
) => {
    return (
        <Button
            background={background}
            width={width}
            height={height}
            border={border}
            onClick={onClick}
            left={left}
            right={right}
            top={top}
            bottom={bottom}
        >
            {text}
            {icon}
        </Button>
    )
};