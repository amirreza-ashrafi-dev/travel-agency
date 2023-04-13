import React, { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";


const BigSizeHeader = React.lazy(() => import("./big-size"));
const SmallSizeHeader = React.lazy(() => import("./small-size"));


const Header: React.FC<{}> = () => {
    const [show, setShow] = useState(false);
    const match = useMediaQuery("(min-width:750px)");


    // this useEffect its not useless the reason i have to use useeffect 
    // is because of this issue (https://github.com/mui/material-ui/issues/21142) which comes from useMediaQuery()
    // in server side rendered applications
    useEffect(() => {
        setShow(true)
    }, [])


    return (
        <>
            {
                show && (
                    match
                        ?
                        <Suspense fallback={<div>loading</div>}>
                            <>
                                <BigSizeHeader />
                            </>
                        </Suspense>
                        :
                        <Suspense
                            fallback={<div>loading</div>}
                        >
                            <SmallSizeHeader />
                        </Suspense>
                )
            }
        </>
    )
}


export default Header;