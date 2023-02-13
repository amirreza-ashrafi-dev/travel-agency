import { Grid, Container } from '@mui/material';
import Image from 'next/image';
import AirplanePic from '@/static-pictures/Rectangle 20.svg'


const Login: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} height="80vh" alignContent={"center"} minHeight="100vh">
                <Grid item xl={6} lg={6} md={6} display="flex" justifyContent={"center"} alignItems="center">
                    <div style={{ backgroundColor: "red" }}>Item</div>
                </Grid>
                <Grid item xl={6} lg={6} md={6} style={{ position: "relative", height:"85%" }}>
                    <div style={{ backgroundColor: "blue" }}><Image fill src={AirplanePic} alt="airplane" /></div>
                </Grid>
            </Grid>
        </Container>

    )
};

export default Login;