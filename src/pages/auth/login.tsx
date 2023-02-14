import { Grid, Container, Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import AirplanePic from '@/static-pictures/Rectangle 20.svg'
import LogoPic from '@/static-pictures/logo.svg';
import AuthForm from '@/components/auth-form/authform.component';


const Login: React.FC = () => {
    const match = useMediaQuery("(min-width:900px)");
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} height="80vh" alignContent={"center"} minHeight="100vh">
                <Grid item xs={12} xl={6} lg={6} md={6} display="flex" justifyContent={"center"} alignItems="center">
                    <Box style={{ width: "100%" }}>
                        <Box style={{ position: "relative" }}>
                            <Image src={LogoPic} alt="logo" priority />
                        </Box>
                        {/* login form container */}
                        <AuthForm />
                    </Box>
                </Grid>
                {match && <Grid item xs={12} xl={6} lg={6} md={6} style={{ position: "relative", height: "90%" }}>
                    <Box><Image fill src={AirplanePic} alt="airplane" priority /></Box>
                </Grid>}

            </Grid>
        </Container>

    )
};

export default Login;