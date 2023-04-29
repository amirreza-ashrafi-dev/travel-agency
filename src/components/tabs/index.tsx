import { FC, useState } from 'react';
import { TabContainer, TabHeader, TabHeaderContainer, indicatorStyle } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@mui/material';

interface tabProps {
    header: string[],
    body: FC[]
}

export const Tab: FC<tabProps> = ({ header, body }) => {
    const [index, setIndex] = useState(0);
    const Body = body[index];
    const width = useMediaQuery('(max-width:750px)');
    return (
        <TabContainer>
            <TabHeaderContainer>
                {
                    header.map((title, idx) => (
                        <TabHeader key={idx} onClick={() => setIndex(idx)}>
                            <span style={{ zIndex: "999" }}>{title}</span>
                            {idx === index &&
                                <motion.div layoutId="underline"
                                    style={
                                        !width
                                            ?
                                            indicatorStyle(100, 5, -10, 1)
                                            :
                                            indicatorStyle(95, 100, 0, .2)
                                    }
                                />
                            }
                        </TabHeader>
                    ))
                }
            </TabHeaderContainer>
            <AnimatePresence>
                <motion.div
                    key={index ? index : "empty"}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Body />
                </motion.div>
            </AnimatePresence>
        </TabContainer>
    )
};