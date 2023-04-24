import { rowsType } from './types';
import Edit from '@/icons/edit/edit.component';
import AddCircle from '@/icons/addcircle/add-circle.component';

export const rowsData: rowsType[] = [
    {
        fieldName: "Name",
        fieldData: "John Doe",
        buttons: [{ Element: <Edit />, text: "Change" }]
    },
    {
        fieldName: "Email",
        fieldData: "john.doe@gmail.com",
        buttons: [
            { Element: <AddCircle />, text: "Add another mail" },
            { Element: <Edit />, text: "Change" }
        ]
    },
    {
        fieldName: "Password",
        fieldData: "************",
        buttons: [{ Element: <Edit />, text: "Change" }]
    },
    {
        fieldName: "Phone number",
        fieldData: "+1 000 000 000",
        buttons: [{ Element: <Edit />, text: "Change" }]
    },
    {
        fieldName: "Address",
        fieldData: "St 32 main downtown, Los Angeles, California, USA",
        buttons: [{ Element: <Edit />, text: "Change" }]
    },
    {
        fieldName: "Date of birth",
        fieldData: "01-01-1992",
        buttons: [{ Element: <Edit />, text: "Change" }]
    },

]