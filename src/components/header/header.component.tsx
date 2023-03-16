import React from "react";
import { Box, Typography } from '@mui/material';
import AirPlaneIcon from "@/icons/airplane/airplane.component";
import HeartIcon from "@/icons/heart/heart.component";
import BedIcon from "@/icons/bed/bed.component";
import Logo from "@/icons/logo/logo.component";
import Image from "next/image";
import ProfileIcon from '@/static-pictures/profile-pic.png'


const Header: React.FC<{}> = () => {
    return (
        <Box padding="15px 40px" display={"flex"} justifyContent="space-between" alignItems="center">
            {/* Left */}
            <Box display={"flex"} justifyContent="center" alignItems="center">
                <Box display={"flex"} justifyContent="center" alignItems="center" marginRight={"20px"}>
                    <Box marginRight={"3px"}>
                        <AirPlaneIcon />
                    </Box>
                    <Box>
                        <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                            Find Flight
                        </Typography>
                    </Box>
                </Box>
                <Box display={"flex"} justifyContent="center" alignItems="center">
                    <Box marginRight={"4px"}>
                        <BedIcon />
                    </Box>
                    <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                        Find Stays
                    </Typography>
                </Box>
            </Box>
            {/* Center */}
            <Box>
                <Logo />
            </Box>
            {/* Right */}
            <Box display={"flex"} justifyContent="center" alignItems="center">
                <Box display={"flex"} justifyContent="center" alignItems="center">
                    <Box marginRight={"4px"}>
                        <HeartIcon />
                    </Box>
                    <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                        Favourites
                    </Typography>
                </Box>
                <Box margin="0 10px">
                    |
                </Box>
                <Box display={"flex"} justifyContent="center" alignItems="center">
                    <Image style={{ marginRight: "10px" }} width={33} src={ProfileIcon} alt="Profile pic" />
                    <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                        John D.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default Header;