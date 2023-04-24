import React from 'react';
import { Tab } from '@/components/tabs'
import { AccountHeader } from '@/components/account';
import {
    AccountTab,
    HistoryTab,
    PaymentTab,
    Container
} from '@/components/account/';

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