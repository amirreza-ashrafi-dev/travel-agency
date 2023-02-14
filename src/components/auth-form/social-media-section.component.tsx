import { Box, } from '@mui/material';
import { socialBoxStyle } from './styles-object';
import FacebookIcon from '@/icons/facebook/facebook.component';
import AppleIcon from '@/icons/apple/apple.component';
import GoogleIcon from '@/icons/google/google.component';

const SocialMediaSection: React.FC = () => {
    return (
        <Box display={"flex"} justifyContent="space-between" marginTop={"1.5rem"}>
            <Box
                style={socialBoxStyle}
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
                style={socialBoxStyle}
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
                style={socialBoxStyle}
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
    )
}

export default SocialMediaSection;