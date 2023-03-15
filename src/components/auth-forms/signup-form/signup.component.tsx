import { Typography, Box, TextField, Checkbox, FormControlLabel, Divider, useMediaQuery } from '@mui/material';
import * as styles from '../auth-forms-styles/styles';
import SocialMediaSection from '../social-form/social-form.component';

const Signup: React.FC = () => {
    const match = useMediaQuery("(min-width:900px)")
    return (
        // {/* form container */}
        <Box width={match ? "80%" : "100%"} height="70%" marginTop="5%">
            {/* the title of form */}
            <Typography variant="body1" fontSize={"40px"} fontFamily={"tradegothic2"}>
                SignUp
            </Typography>
            <Typography variant="body2" fontFamily={"tradegothic"} style={styles.formTitleStyle}>
                Lets get you all st up so you can access your personal account.
            </Typography>
            {/* input section */}
            <Box marginTop="4rem" display="flex" flexDirection={!match ? "column" : "initial"}>
                <Box marginRight={!match ? "0" : "26px"}>
                    <TextField
                        label="FirstName"
                        id="outlined-size-small"
                        defaultValue=" "
                        size="small"
                        fullWidth
                        style={styles.emailFieldsStyle}
                    />
                    <TextField
                        label="LastName"
                        id="outlined-size-small"
                        defaultValue=" "
                        size="small"
                        fullWidth
                        style={styles.emailFieldsStyle}
                    />
                </Box>
                <Box>
                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        defaultValue=" "
                        size="small"
                        fullWidth
                        style={styles.emailFieldsStyle}
                    />
                    <TextField
                        label="PhoneNumber"
                        id="outlined-size-small"
                        defaultValue=" "
                        size="small"
                        fullWidth
                        style={styles.emailFieldsStyle}
                    />
                </Box>
            </Box>
            {/* remember me and forgot section */}
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"} marginTop="1rem">
                <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant="body2" fontFamily={"Monteserrat"}>
                    I agree to all the? <span style={styles.signUpStyle}>Terms</span> and <span style={styles.signUpStyle}>Privacy Policies</span>
                </Typography>} style={styles.formControlLabelStyle} />
            </Box>
            {/* button and dont have account section */}
            <Box marginTop="1rem" display="flex" alignItems={"center"} flexDirection="column">
                <button
                    style={styles.submitButtonStyle}>
                    Create account
                </button>
                <Typography variant="body2" fontFamily={"Monteserrat"}>
                    Already have an account? <span style={styles.signUpStyle}>Login</span>
                </Typography>
            </Box>
            <Box sx={{ marginTop: "2rem" }}>
                <Divider />
                <Box display={"flex"} justifyContent="center" fontFamily={"Monteserrat"} fontSize="14px" sx={styles.socialLineStyle}>
                    <Box sx={styles.background}><span style={styles.opacity}>Or login with</span></Box>
                </Box>
                <SocialMediaSection />
            </Box>
        </Box>
    )
};


export default Signup;