import UploadBtn from '@/components/buttons/upload-btn/upload-btn.component';
import ConverImageSrc from '@/static-pictures/cover-static-pic.png';
import { Cover } from './styles';
import Image from 'next/image';


const AccountHeader: React.FC<{}> = () => {
    return (
        <Cover>
            <Image placeholder="blur" fill src={ConverImageSrc} alt="cover-image" />
            <UploadBtn />
        </Cover>
    )
}

export default AccountHeader;