import { styled } from '@mui/material';
import { responsveStrinGenerator } from '@/lib';

export const TabWrapper = styled("div")(() => ({
    marginTop: "2.3rem",
    paddingLeft: ".3rem"
}));

export const TabContent = styled("div")(() => ({
    marginTop: "2.3rem",
    background: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
    borderRadius: "16px",
    padding: "32px 24px"
}));

export const Row = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    ...responsveStrinGenerator(775, {
        flexDirection: "column",
        alignItems: "center"
    })
}));

export const Left = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
}));

export const ButtonContainer = styled("div")(() => ({
    display: "flex",
    ...responsveStrinGenerator(775, {
        marginTop: "20px",
        flexDirection: "column"
    })
}));

export const ButtonWrapper = styled("div")(() => ({
    ...responsveStrinGenerator(775, {
        marginBottom: "10px",
    })
}));

export const Span = styled("span")(({ fontSize, fontWeight, lineHeight, color, opacity, marginBottom }: { [key: string]: string }) => ({
    fontFamily: 'Monteserrat',
    fontStyle: "normal",
    fontWeight: `${fontWeight}`,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    color: `${color}`,
    opacity: `${opacity ? opacity : 1}`,
    marginBottom: marginBottom ? marginBottom : 0,
    ...responsveStrinGenerator(775, {
        textAlign: "center"
    })
}))