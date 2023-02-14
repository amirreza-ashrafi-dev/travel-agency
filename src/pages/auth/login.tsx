import { Grid, Container, Typography, Box, TextField, Checkbox, FormControlLabel, Divider, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import AirplanePic from '@/static-pictures/Rectangle 20.svg'
import LogoPic from '@/static-pictures/logo.svg';
import FacebookIcon from '@/icons/facebook/facebook.component';
import AppleIcon from '@/icons/apple/apple.component';
import GoogleIcon from '@/icons/google/google.component';

const Login: React.FC = () => {
    const match = useMediaQuery("(min-width:900px)")
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} height="80vh" alignContent={"center"} minHeight="100vh">
                <Grid item xs={12} xl={6} lg={6} md={6} display="flex" justifyContent={"center"} alignItems="center">
                    <Box style={{ width: "100%" }}>
                        <Box style={{ position: "relative" }}>
                            <Image src={LogoPic} alt="logo" priority />
                        </Box>
                        {/* login form container */}
                        <Box width={match ? "80%" : "100%"} style={{ height: "70%", marginTop: "5%" }}>
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
                                <Box display={"flex"} justifyContent="space-between" marginTop={"1.5rem"}>
                                    <Box
                                        style={{ cursor: "pointer" }}
                                        width="170px"
                                        border={"1px solid #8DD3BB"}
                                        padding="16px 24px"
                                        display={"flex"}
                                        justifyContent="center"
                                        alignItems={"center"}
                                        borderRadius="4px"
                                        boxSizing={"border-box"}
                                        margin="0 10px"
                                    >
                                        <FacebookIcon />
                                    </Box>
                                    <Box
                                        style={{ cursor: "pointer" }}
                                        width="170px"
                                        border={"1px solid #8DD3BB"}
                                        padding="16px 24px"
                                        display={"flex"}
                                        justifyContent="center"
                                        alignItems={"center"}
                                        borderRadius="4px"
                                        boxSizing={"border-box"}
                                        margin="0 10px"
                                    >
                                        <GoogleIcon />
                                    </Box>
                                    <Box
                                        style={{ cursor: "pointer" }}
                                        width="170px"
                                        border={"1px solid #8DD3BB"}
                                        padding="16px 24px"
                                        display={"flex"}
                                        justifyContent="center"
                                        alignItems={"center"}
                                        borderRadius="4px"
                                        boxSizing={"border-box"}
                                        margin="0 10px"
                                    >
                                        <AppleIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                {match && <Grid item xs={12} xl={6} lg={6} md={6} style={{ position: "relative", height: "90%" }}>
                    <Box style={{ backgroundColor: "blue" }}><Image fill src={AirplanePic} alt="airplane" priority /></Box>
                </Grid>}

            </Grid>
        </Container>

    )
};

export default Login;