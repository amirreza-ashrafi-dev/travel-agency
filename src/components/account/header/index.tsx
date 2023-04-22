import ConverImageSrc from '@/static-pictures/cover-static-pic.png';
import ProfilePhoto from './profile-photo.component';
import { UploadBtn } from '@/components/buttons';
import { Cover } from './styles';
import Image from 'next/image';


export const AccountHeader: React.FC<{}> = () => {
    return (
        <Cover>
            <Image placeholder="blur" fill src={ConverImageSrc} alt="cover-image" />
            <UploadBtn />
            <ProfilePhoto />
        </Cover>
    )
}