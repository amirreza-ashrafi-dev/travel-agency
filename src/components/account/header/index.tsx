import {styled} from '@mui/material';
import Image from 'next/image';
import ConverImageSrc from '@/static-pictures/cover-static-pic.png'

const Cover = styled("div")({
    width: '100%',
    height: "350px",
    borderRadius:"12px"
})


const AccountHeader : React.FC<{}> = ()=>{
    return (
        <Cover>
            <Image style={{width:"100%"}} src={ConverImageSrc} alt="cover-image" />
        </Cover>
    )
}

export default AccountHeader;