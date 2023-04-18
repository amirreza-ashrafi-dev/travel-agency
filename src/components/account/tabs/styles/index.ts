import { styled } from '@mui/material';

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
    cursor: "pointer"
}));

const TabHeaderContainer = styled("div")(() => ({
    display: "flex",
    // justifyContent: "space-between",
    padding: "10px 0",
    boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
    borderRadius: "12px",
    height: "45px",
    backgroundColor: "#FFFFFF"
}));


export { TabContainer, TabHeader, TabHeaderContainer }