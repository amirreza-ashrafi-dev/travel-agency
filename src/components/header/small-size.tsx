import React, { useState } from "react";
import { Box, Typography, Button } from '@mui/material';
import Image from "next/image";
import ProfileIcon from '@/static-pictures/profile-pic.png';
import MobileToggleBtn from "./mobile-toggle-btn";
import { AnimatePresence, motion } from 'framer-motion';
import Logo from "@/icons/logo/logo.component";


const MobileHeader: React.FC<{}> = () => {
    const [showMenu, setShowMenu] = useState(false);
    const MenuAnimation = {
        initial: { opacity: 0, height: 0 },
        animation: { opacity: 1, height: "auto" }
    }

    return (
        <Box
            padding="15px 10px"
            display={"flex"}
            flexDirection={"column"}
            left={0}
            right={0}
            zIndex={2000}
        >
            <Box display={"flex"} justifyContent="space-between">
                <Box>
                    <Logo />
                </Box>
                <MobileToggleBtn Click={() => setShowMenu(!showMenu)} Show={showMenu} />
            </Box>
            <AnimatePresence>
                <motion.div
                    initial={MenuAnimation.initial}
                    transition={{ type: 'spring', damping: 25 }}
                    animate={
                        showMenu
                            ?
                            MenuAnimation.animation
                            :
                            MenuAnimation.initial
                    }
                >
                    <Box display={"flex"} flexDirection="column" justifyContent="center" alignItems="center">
                        <Image style={{ marginRight: "10px" }} width={70} src={ProfileIcon} alt="Profile pic" />
                        <Box margin={"10px 0 5px 0"}>
                            <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                                John D.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent="center" alignItems="center">
                        <Box style={{ width: "fit-content" }}>
                            <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                                Favourites
                            </Typography>
                            <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                                Find Flight
                            </Typography>
                            <Typography variant="body1" fontSize={"14px"} fontFamily={"Monteserrat"}>
                                Find Stays
                            </Typography>
                        </Box>

                    </Box>
                </motion.div>
            </AnimatePresence>
        </Box>
    )
}


export default MobileHeader;