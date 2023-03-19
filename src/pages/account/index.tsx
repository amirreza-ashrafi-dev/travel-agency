import React from 'react';
import { styled } from '@mui/material';
import AccountHeader from '@/components/account/header';

const Container = styled("div")({
    padding:  "0 40px",
    margin: ' 0 auto',
})


const Account: React.FC<{}> = () => {
    return (
        <Container>
            <AccountHeader />
        </Container>
    )
}


export default Account;