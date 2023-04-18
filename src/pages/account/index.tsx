import React from 'react';
import { styled, Typography } from '@mui/material';
import { AccountHeader, Tab } from '@/components/account';

const Container = styled("div")({
    padding: "0 40px",
    margin: ' 0 auto',
    // border: "1px solid"
});

const TabWrapper = styled("div")(() => ({
    marginTop: "2.3rem",
    paddingLeft: ".3rem"
}))

const AccountTab: React.FC = () => {
    return (
        <TabWrapper>
            <Typography variant="h4" fontFamily={"monteserrat2"} fontWeight={"bold"}>Account</Typography>
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