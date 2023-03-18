import { styled } from '@mui/material';


export const MenuLine = styled("div")(({ Show, transform }: { Show: boolean, transform?: string }) => {
    return {
        width: "30px",
        height: "2px",
        backgroundColor: "black",
        marginTop: "5px",
        transform: `${Show ? transform : ""}`,
        transitionDuration: '0.5s',
        transitionProperty: "transform opacity"
    }
})