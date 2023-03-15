import { Typography, Box, TextField, Checkbox, FormControlLabel, Divider, useMediaQuery } from '@mui/material';
import * as styles from '../auth-forms-styles/styles';
import SocialMediaSection from '../social-form/social-form.component';


const AuthForm: React.FC = () => {
    const match = useMediaQuery("(min-width:900px)")
    return (
        // {/* form container */}
        <Box width={match ? "80%" : "100%"} height="70%" marginTop="5%">
            {/* the title of form */}
            <Typography variant="body1" fontSize={"40px"} fontFamily={"tradegothic2"}>
                Forgot your password ? 
            </Typography>
            <Typography variant="body2" fontFamily={"tradegothic"} style={styles.formTitleStyle}>
                Dont worry, happens to all of us. Enter your email below to recover your password
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
            </Box>
            {/* button and dont have account section */}
            <Box marginTop="1rem" display="flex" alignItems={"center"} flexDirection="column">
                <button
                    style={styles.submitButtonStyle}>
                    Submit
                </button>
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