import type { FC } from 'react';
import Image from 'next/image';
import ProfilePic from '@/static-pictures/profile.PNG';
import { Container, ImageStyles, ProfileImageWrapper, ProfileDetail, ProfileDetailWrapper } from './styles/profile-photo';

const ProfilePhoto: FC = () => {
    return (
        <Container>
            <ProfileImageWrapper>
                <Image style={ImageStyles} src={ProfilePic} alt='profile-picture' />
                <ProfileDetailWrapper>
                    <ProfileDetail fontWeight='600px' fontSize='24px' lineHeight='29px'>
                        John Doe.
                    </ProfileDetail>
                    <ProfileDetail fontWeight='400px' fontSize='14px' lineHeight='20px'>
                        john.doe@gmail.com
                    </ProfileDetail>
                </ProfileDetailWrapper>
            </ProfileImageWrapper>
        </Container>
    )
}

export default ProfilePhoto;