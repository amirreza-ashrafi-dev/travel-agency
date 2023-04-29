import { styled } from '@mui/material';
import { responsveStrinGenerator } from '@/lib';
import { MotionStyle } from 'framer-motion';

const TabContainer = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "10rem",
}))

const TabHeader = styled("div")(({ border }: { border?: boolean }) => ({
    flexGrow: 1,
    borderRight: `${border ? '2px solid #D7E2EE' : 'none'}`,
    display: "flex",
    alignItems: "center",
    fontFamily: 'Monteserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    padding: "5px 25px",
    cursor: "pointer",
    position: "relative",
}));

const TabHeaderContainer = styled("div")(() => ({
    display: "flex",
    padding: "10px 0",
    boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
    borderRadius: "12px",
    overflow: "hidden",
    height: "45px",
    backgroundColor: "#FFFFFF",
    ...responsveStrinGenerator(750, {
        flexDirection: "column",
        height: "auto"
    }),
}));

const indicatorStyle = (width: number, height: number, bottom: number, opacity: number): MotionStyle => {
    return {
        position: "absolute",
        left: "7px",
        bottom: `${bottom}px`,
        width: `${width}%`,
        height: `${height}%`,
        backgroundColor: "#8DD3BB",
        borderRadius: "5px",
        opacity: `${opacity}`
    }
}


export { TabContainer, TabHeader, TabHeaderContainer, indicatorStyle }