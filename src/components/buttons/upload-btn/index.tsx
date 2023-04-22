import UploadIcon from '@/icons/upload/upload.component';
import { UploadButton, UploadText } from "./styles";

export const UploadBtn: React.FC<{}> = () => {
    return (
        <UploadButton component="label">
            <UploadText>Upload new cover</UploadText>
            <UploadIcon />
            <input hidden accept="image/*" type="file" />
        </UploadButton>
    )
};