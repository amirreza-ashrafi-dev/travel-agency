import { styled, Button } from '@mui/material';
import { StyledComponent } from '@emotion/styled';

export const UploadButton: StyledComponent<{ children: React.ReactNode, component: string }> = styled(Button)({
    position: "absolute",
    right: "30px",
    bottom: "30px",
    backgroundColor: "#8DD3BB",
    '&:hover': {
        backgroundColor: "#8DD3BB",
    },
    fontFamily: "Monteserrat",
    color: "#112211",
    fontSize: "14px",
    display: "flex",
    flexDirection: "row-reverse",
    height: "54px",
    borderRadius: "5px",
    border: "none"
});

export const UploadText = styled("span")(() => ({
    marginLeft: "8px"
}))