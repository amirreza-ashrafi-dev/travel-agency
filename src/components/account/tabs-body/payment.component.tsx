import { Typography } from '@mui/material'
import { TabWrapper } from './styles'

export const PaymentTab: React.FC = () => {
    return (
        <TabWrapper>
            <Typography variant="h4" fontFamily={"monteserrat2"} fontWeight={"bold"}>Payment Methods</Typography>
        </TabWrapper>
    )
}