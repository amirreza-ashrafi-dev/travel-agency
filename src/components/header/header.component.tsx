import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";

const BigSizeHeader = dynamic(() => import("./big-size"), {
    loading: () => <div>loading ...</div>
});
const SmallSizeHeader = dynamic(() => import("./small-size"), {
    loading: () => <div>loading ...</div>
});


const Header: React.FC<{}> = () => {
    const [show, setShow] = useState(true);
    const match = useMediaQuery("(min-width:750px)");

    // this useEffect its not useless the reason i have to use useeffect 
    // is because this issue (https://github.com/mui/material-ui/issues/21142) which comes from useMediaQuery()
    // in server side rendered applications
    // useEffect(() => {
    //     setShow(true)
    // }, [])
    return (
        <>
            {show && (!match ? <SmallSizeHeader /> : <BigSizeHeader />)}
        </>
    )
}


export default Header;