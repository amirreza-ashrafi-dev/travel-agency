import { styled } from '@mui/material';
import { ButtonBase } from '@mui/material';

export interface ButtonProps {
    width: string,
    height: string,
    border: string,
    background: string,
    left?: string,
    right?: string,
    bottom?: string,
    top?: string
};

export const Button = styled(ButtonBase)(({ width, height, border, background, left, right, top, bottom }: ButtonProps) => {
    return {
        width,
        height,
        border,
        background,
        borderRadius: "4px",
        cursor: "pointer",
        fontFamily: "Monteserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "17px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
        marginLeft: left ? left : "none",
        marginRight: right ? right : "none",
        marginBottom: bottom ? bottom : "none",
        marginTop: top ? top : "none"
    }
})