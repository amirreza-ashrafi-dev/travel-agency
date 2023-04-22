import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import profileStaticPic from '@/static-pictures/profile-pic.png';
import ChevronIcon from '@/icons/chevron/chevron.component';
import { motion } from 'framer-motion';
import { motionDivStyles } from './styles'
import { ListData } from './data'
import { DropDown } from './types'


const DropDownMenu: React.FC<DropDown> = ({ mouseEnter, mouseLeave }) => {
    return (
        <motion.div
            onMouseLeave={mouseLeave}
            onMouseEnter={mouseEnter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={motionDivStyles}
        >
            {/* drop down header */}
            <Box display={"flex"} alignItems="center" width={"80%"} margin="35px auto 0 auto" borderBottom="2px solid #eceded" paddingBottom="20px">
                <Image width={55} src={profileStaticPic} alt="profile-pic" />
                <Box style={{ marginLeft: "10px" }}>
                    <Typography variant="body2" fontWeight={"bold"} fontFamily="Monteserrat2">John Doe.</Typography>
                    <Typography variant="caption" fontSize={"0.68rem"} fontWeight={"bold"} color="#112211" fontFamily="Monteserrat2">Online</Typography>
                </Box>
            </Box>
            {/* lists */}
            {
                Object.keys(ListData).map((list, idx) => (
                    <Box key={idx} display={"flex"} width="80%" margin={"20px auto"} paddingBottom="20px" flexDirection="column" borderBottom="2px solid #eceded">
                        {ListData[list].map(list => (
                            <Box display={"flex"} marginBottom="10px" alignItems={"center"} justifyContent="space-between">
                                <Box display={"flex"}>
                                    <Box marginRight={"7px"}>{<list.icon />}</Box>
                                    <Typography variant="body2" fontSize={"14px"} fontFamily="Monteserrat">{list.name}</Typography>
                                </Box>
                                {
                                    list.name !== "Logout"
                                    &&
                                    (
                                        <Box style={{ width: "fit-content" }}>
                                            <ChevronIcon />
                                        </Box>
                                    )
                                }
                            </Box>
                        ))}
                    </Box>
                ))
            }
        </motion.div>
    )
}

export default DropDownMenu;