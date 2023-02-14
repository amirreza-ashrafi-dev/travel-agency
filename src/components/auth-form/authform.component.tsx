import { Typography, Box, TextField, Checkbox, FormControlLabel, Divider, useMediaQuery } from '@mui/material';
import * as styles from './styles-object';
import SocialMediaSection from './social-media-section.component';

const AuthForm: React.FC = () => {
    const match = useMediaQuery("(min-width:900px)")
    return (
        // {/* form container */}
        <Box width={match ? "80%" : "100%"} height="70%" marginTop="5%">
            {/* the title of form */}
            <Typography variant="body1" fontSize={"40px"} fontFamily={"tradegothic2"}>
                Login
            </Typography>
            <Typography variant="body2" fontFamily={"tradegothic"} style={styles.formTitleStyle}>
                Login to access your Golobe account
            </Typography>
            {/* input section */}
            <Box marginTop="4rem">
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    defaultValue=" "
                    size="small"
                    fullWidth
                    style={styles.emailFieldsStyle}
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
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" style={styles.formControlLabelStyle} />
                <Typography variant="body2" fontFamily={"Monteserrat"} style={styles.forgotPassStyle} color="#FF8682">
                    Forgot password
                </Typography>
            </Box>
            {/* button and dont have account section */}
            <Box marginTop="1rem" display="flex" alignItems={"center"} flexDirection="column">
                <button
                    style={styles.submitButtonStyle}>
                    Login
                </button>
                <Typography variant="body2" fontFamily={"Monteserrat"}>
                    Don’t have an account? <span style={styles.signUpStyle}>Sign up</span>
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


export default AuthForm;