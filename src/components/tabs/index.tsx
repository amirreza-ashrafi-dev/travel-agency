import { FC, useState } from 'react';
import { TabContainer, TabHeader, TabHeaderContainer } from './styles'

interface tabProps {
    header: string[],
    body: FC[]
}

export const Tab: FC<tabProps> = ({ header, body }) => {
    const [index, setIndex] = useState(0);
    const Body = body[index];
    return (
        <TabContainer>
            <TabHeaderContainer>
                {
                    header.map((title, idx) => (
                        <TabHeader key={idx} onClick={() => setIndex(idx)}>
                            {title}
                        </TabHeader>
                    ))
                }
            </TabHeaderContainer>
            <Body />
        </TabContainer>
    )
};