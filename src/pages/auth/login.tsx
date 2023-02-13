import { Grid, Container, Typography, Box, TextField, Checkbox, FormControlLabel, Divider } from '@mui/material';
import Image from 'next/image';
import AirplanePic from '@/static-pictures/Rectangle 20.svg'
import LogoPic from '@/static-pictures/logo.svg';

const Login: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} height="80vh" alignContent={"center"} minHeight="100vh">
                <Grid item xl={6} lg={6} md={6} display="flex" justifyContent={"center"} alignItems="center">
                    <Box style={{ width: "100%"}}>
                        <Box style={{ position: "relative" }}>
                            <Image src={LogoPic} alt="logo" priority />
                        </Box>
                        {/* login form container */}
                        <Box style={{ width: "80%", height: "70%", marginTop: "5%" }}>
                            {/* the title of form */}
                            <Typography variant="body1" fontSize={"40px"} fontFamily={"tradegothic2"}>
                                Login
                            </Typography>
                            <Typography variant="body2" fontFamily={"tradegothic"} style={{ opacity: "0.75" }}>
                                Login to access your Golobe account
                            </Typography>
                            {/* input section */}
                            <Box sx={{ marginTop: "4rem" }}>
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    defaultValue=" "
                                    size="small"
                                    fullWidth
                                    style={{ marginBottom: "2rem" }}
                                />
                                <TextField
                                    label="Password"
                                    id="outlined-size-small"
                                    defaultValue=" "
                                    size="small"
                                    fullWidth
                                    type={"password"}
                                />
                            </Box>
                            {/* remember me and forgot section */}
                            <Box display={"flex"} justifyContent="space-between" alignItems={"center"} marginTop="1rem">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" style={{ fontFamily: "Monteserrat" }} />
                                <Typography variant="body2" fontFamily={"Monteserrat"} style={{ color: "red", cursor: "pointer" }} color="#FF8682">
                                    Forgot password
                                </Typography>
                            </Box>
                            {/* button and dont have account section */}
                            <Box sx={{ marginTop: "1rem" }} display="flex" alignItems={"center"} flexDirection="column">
                                <button
                                    style={
                                        {
                                            backgroundColor: "#8DD3BB",
                                            width: "100%",
                                            border: "none",
                                            padding: "8px 16px",
                                            fontFamily: "Monteserrat",
                                            marginBottom: "0.5rem"
                                        }
                                    }>
                                    Login
                                </button>
                                <Typography variant="body2" fontFamily={"Monteserrat"}>
                                    Don’t have an account? <span style={{ color: "#FF8682" }}>Sign up</span>
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: "2rem" }}>
                                <Divider />
                                <Box display={"flex"} justifyContent="center" sx={{ transform: "translateY(-10px)", fontFamily: "Monteserrat", fontSize: "14px" }}>
                                    <div style={{ backgroundColor: "white" }}><span style={{ opacity: "0.5" }}>Or login with</span></div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} style={{ position: "relative", height: "90%" }}>
                    <Box style={{ backgroundColor: "blue" }}><Image fill src={AirplanePic} alt="airplane" priority /></Box>
                </Grid>
            </Grid>
        </Container>

    )
};

export default Login;