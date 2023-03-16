import { Typography, Box, TextField, Checkbox, FormControlLabel, Divider, useMediaQuery } from '@mui/material';
import * as styles from '../auth-forms-styles/styles';
import SocialMediaSection from '../social-form/social-form.component';


const NewPass: React.FC = () => {
    const match = useMediaQuery("(min-width:900px)")
    return (
        // {/* form container */}
        <Box width={match ? "80%" : "100%"} height="70%" marginTop="5%">
            {/* the title of form */}
            <Typography variant="body1" fontSize={"40px"} fontFamily={"tradegothic2"}>
                Set a password
            </Typography>
            <Typography variant="body2" fontFamily={"tradegothic"} style={styles.formTitleStyle}>
                Your previous password has been reseted. Please set a new password for your account
            </Typography>
            {/* input section */}
            <Box marginTop="4rem">
                <TextField
                    label="Create Password"
                    id="outlined-size-small"
                    defaultValue=" "
                    size="small"
                    fullWidth
                    style={styles.emailFieldsStyle}
                    type="password"
                />
                <TextField
                    label="Re-enter password"
                    id="outlined-size-small"
                    defaultValue=" "
                    size="small"
                    fullWidth
                    style={styles.emailFieldsStyle}
                    type="password"
                />
            </Box>
            {/* button and dont have account section */}
            <Box marginTop="1rem" display="flex" alignItems={"center"} flexDirection="column">
                <button
                    style={styles.submitButtonStyle}>
                    Set Password
                </button>
            </Box>
        </Box>
    )
};


export default NewPass