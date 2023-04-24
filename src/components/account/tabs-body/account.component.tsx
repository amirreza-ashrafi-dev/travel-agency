import { TabWrapper, Row, Left, TabContent, Span } from './styles';
import { RegularButton } from '@/components/buttons';
import { Typography } from '@mui/material';
import { rowsData } from './data/data';

export const AccountTab: React.FC = () => {
    return (
        <TabWrapper>
            <Typography
                variant="h4"
                fontFamily={"monteserrat2"}
                fontWeight={"bold"}
            >
                Account
            </Typography>
            <TabContent>
                {
                    rowsData.map((row, idx) => (
                        <Row key={idx}>
                            <Left>
                                <Span
                                    fontSize="16"
                                    fontWeight="400"
                                    lineHeight="20"
                                    color='#112211'
                                    opacity="0.75"
                                    marginBottom={".3rem"}
                                >
                                    {row.fieldName}
                                </Span>
                                <Span
                                    fontSize="20"
                                    fontWeight="600"
                                    lineHeight="24"
                                    color='#112211'
                                >
                                    {row.fieldData}
                                </Span>
                            </Left>
                            <div style={{ display: "flex" }}>
                                {
                                    row.buttons.map(({ Element, text }, idx) => (
                                        <RegularButton
                                            key={idx}
                                            text={text}
                                            background='#FFFFFF'
                                            border='1px solid #8DD3BB'
                                            width={row.fieldName === "Email" ? "180px" : "140px"}
                                            height="48px"
                                            onClick={(e) => console.log("click")}
                                            left='10px'
                                            icon={<div style={{ marginRight: "5px" }}>{Element}</div>}
                                        />
                                    ))
                                }
                            </div>
                        </Row>
                    ))
                }
            </TabContent>
        </TabWrapper>
    )
};