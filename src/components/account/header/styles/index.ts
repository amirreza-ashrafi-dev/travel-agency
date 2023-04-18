import { styled } from '@mui/material';

const Cover = styled("div")({
    width: '100%',
    height: "350px",
    borderRadius: "12px",
    position: "relative"
});

const Container = styled("div")(() => ({
    position: "absolute", left: 0,
    right: 0,
    margin: "0 auto",
    width: "fit-content",
    bottom: "-65px",
}));

const ProfileImageWrapper = styled("div")(() => ({
    position: "relative",
    width: "150px",
    height: "150px",
    filter: "drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08))"
}));

const ImageStyles: { [key: string]: string } = {
    borderRadius: "50%", border: "4px solid #FF8682", width: "150px",
    height: "150px",
};

interface profileDeatil { fontWeight: string, fontSize: string, lineHeight: string }
const ProfileDetail = styled("span")((props: profileDeatil) => ({
    fontFamily: 'Monteserrat',
    fontStyle: "normal",
    fontWeight: `${props.fontWeight}`,
    fontSize: `${props.fontSize}`,
    lineHeight: `${props.lineHeight}`,
    textAlign: "center"
}));

const ProfileDetailWrapper = styled("div")(() => ({ display: "flex", flexDirection: "column", alignItems: "center" }))


export { Container, ProfileImageWrapper, ImageStyles, ProfileDetail, ProfileDetailWrapper, Cover }