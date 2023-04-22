import React from 'react';
import { styled, Typography } from '@mui/material';
import { AccountHeader, Tab } from '@/components/account';
import { RegularButton } from '@/components/buttons';
import Edit from '@/icons/edit/edit.component';
import AddCircle from '@/icons/addcircle/add-circle.component';

const Container = styled("div")({
    padding: "0 40px",
    margin: ' 0 auto',
    // border: "1px solid"
});

const TabWrapper = styled("div")(() => ({
    marginTop: "2.3rem",
    paddingLeft: ".3rem"
}));

const TabContent = styled("div")(() => ({
    marginTop: "2.3rem",
    background: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
    borderRadius: "16px",
    padding: "32px 24px"
}));

const Row = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5rem"
}));

const Left = styled("div")(() => ({
    display: "flex",
    flexDirection: "column"
}));

const Span = styled("span")(({ fontSize, fontWeight, lineHeight, color, opacity, marginBottom }: { [key: string]: string }) => ({
    fontFamily: 'Monteserrat',
    fontStyle: "normal",
    fontWeight: `${fontWeight}`,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    color: `${color}`,
    opacity: `${opacity ? opacity : 1}`,
    marginBottom: marginBottom ? marginBottom : 0
}))

const AccountTab: React.FC = () => {
    return (
        <TabWrapper>
            <Typography variant="h4" fontFamily={"monteserrat2"} fontWeight={"bold"}>Account</Typography>
            <TabContent>
                <Row>
                    <Left>
                        <Span fontSize="16" fontWeight="400" lineHeight="20" color='#112211' opacity="0.75" marginBottom={".3rem"}>Name</Span>
                        <Span fontSize="20" fontWeight="600" lineHeight="24" color='#112211'>John Doe</Span>
                    </Left>
                    <RegularButton
                        text='change'
                        background='#FFFFFF'
                        border='1px solid #8DD3BB'
                        width="140px"
                        height="48px"
                        onClick={(e) => console.log("click")}
                        icon={<div style={{ marginRight: "5px" }}><Edit /></div>}
                    />
                </Row>
                <Row>
                    <Left>
                        <Span fontSize="14" fontWeight="400" lineHeight="20" color='#112211' opacity="0.75" marginBottom={".3rem"}>Email</Span>
                        <Span fontSize="18" fontWeight="600" lineHeight="24" color='#112211'>John.Doe@gmail.com</Span>
                    </Left>
                    <div style={{ display: "flex", flexDirection:"row-reverse" }}>
                        <RegularButton
                            text='change'
                            background='#FFFFFF'
                            border='1px solid #8DD3BB'
                            width="140px"
                            height="48px"
                            onClick={(e) => console.log("click")}
                            icon={<div style={{ marginRight: "5px" }}><Edit /></div>}
                        />
                        <RegularButton
                            text='Add another email'
                            background='#FFFFFF'
                            border='1px solid #8DD3BB'
                            width="180px"
                            height="48px"
                            marginright='10px'
                            onClick={(e) => console.log("click")}
                            icon={<div style={{ marginRight: "5px" }}><AddCircle /></div>}
                        />
                    </div>
                </Row>
                <Row>
                    <Left>
                        <Span fontSize="14" fontWeight="400" lineHeight="20" color='#112211' opacity="0.75" marginBottom={".3rem"}>Password</Span>
                        <Span fontSize="18" fontWeight="600" lineHeight="24" color='#112211'>****************</Span>
                    </Left>
                    <RegularButton
                        text='change'
                        background='#FFFFFF'
                        border='1px solid #8DD3BB'
                        width="140px"
                        height="48px"
                        onClick={(e) => console.log("click")}
                        icon={<div style={{ marginRight: "5px" }}><Edit /></div>}
                    />
                </Row>
                <Row>
                    <Left>
                        <Span fontSize="14" fontWeight="400" lineHeight="20" color='#112211' opacity="0.75" marginBottom={".3rem"}>Phone number</Span>
                        <Span fontSize="18" fontWeight="600" lineHeight="24" color='#112211'>+1 000-000-000</Span>
                    </Left>
                    <RegularButton
                        text='change'
                        background='#FFFFFF'
                        border='1px solid #8DD3BB'
                        width="140px"
                        height="48px"
                        onClick={(e) => console.log("click")}
                        icon={<div style={{ marginRight: "5px" }}><Edit /></div>}
                    />
                </Row>
                <Row>
                    <Left>
                        <Span fontSize="14" fontWeight="400" lineHeight="20" color='#112211' opacity="0.75" marginBottom={".3rem"}>Address</Span>
                        <Span fontSize="18" fontWeight="600" lineHeight="24" color='#112211'>St 32 main downtown, Los Angeles, California, USA</Span>
                    </Left>
                    <RegularButton
                        text='change'
                        background='#FFFFFF'
                        border='1px solid #8DD3BB'
                        width="140px"
                        height="48px"
                        onClick={(e) => console.log("click")}
                        icon={<div style={{ marginRight: "5px" }}><Edit /></div>}
                    />
                </Row>
                <Row>
                    <Left>
                        <Span fontSize="14" fontWeight="400" lineHeight="20" color='#112211' opacity="0.75" marginBottom={".3rem"}>Date of birth</Span>
                        <Span fontSize="18" fontWeight="600" lineHeight="24" color='#112211'>01-01-1992</Span>
                    </Left>
                    <RegularButton
                        text='change'
                        background='#FFFFFF'
                        border='1px solid #8DD3BB'
                        width="140px"
                        height="48px"
                        onClick={(e) => console.log("click")}
                        icon={<div style={{ marginRight: "5px" }}><Edit /></div>}
                    />
                </Row>
            </TabContent>
        </TabWrapper>
    )
};

const HistoryTab: React.FC = () => {
    return (
        <TabWrapper>
            <Typography variant="h4" fontFamily={"monteserrat2"} fontWeight={"bold"}>History</Typography>
        </TabWrapper>
    )
};

const PaymentTab: React.FC = () => {
    return (
        <TabWrapper>
            <Typography variant="h4" fontFamily={"monteserrat2"} fontWeight={"bold"}>Payment Methods</Typography>
        </TabWrapper>
    )
}

const Account: React.FC<{}> = () => {
    const TabList = ["Account", "History", "Payment Methods"]
    return (
        <Container>
            <AccountHeader />
            <Tab
                header={TabList}
                body={
                    [AccountTab, HistoryTab, PaymentTab]
                }
            />
        </Container>
    )
}


export default Account;