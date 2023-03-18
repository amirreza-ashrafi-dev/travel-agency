import React from "react";
import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";

const BigSizeHeader = dynamic(() => import("./big-size"), {
    loading: () => <div>loading ...</div>
});
const SmallSizeHeader = dynamic(() => import("./small-size"), {
    loading: () => <div>loading ...</div>
});


const Header: React.FC<{}> = () => {
    const match = useMediaQuery("(min-width:750px)");
    return (
        <>
            {!match ? <SmallSizeHeader /> : <BigSizeHeader />}
        </>
    )
}


export default Header;