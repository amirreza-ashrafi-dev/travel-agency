import { rowsType } from './types';
import Edit from '@/icons/edit/edit.component';
import AddCircle from '@/icons/addcircle/add-circle.component';

export const rowsData: rowsType[] = [
    {
        fieldName: "Name",
        fieldData: "JohnDoe",
        buttons: [<Edit />]
    },
    {
        fieldName: "Email",
        fieldData: "John.Doe@gmail.com",
        buttons: [<Edit />, <AddCircle />]
    },
    {
        fieldName: "Name",
        fieldData: "JognDoe",
        buttons: [<Edit />]
    },
    {
        fieldName: "Name",
        fieldData: "JognDoe",
        buttons: [<Edit />]
    }
]