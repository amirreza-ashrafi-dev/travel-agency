import SeetingsIcon from '@/icons/settings/settings.component';
import CardIcon from '@/icons/card/card.component';
import UserIcon from '@/icons/user/user.component';
import SupportIcon from '@/icons/support/support.component';
import LogoutIcon from '@/icons/logout/logout.component';


export const ListData: {
    [key: string]: Array<{ name: string, icon: React.FC }>
} = {
    1: [
        {
            name: "My account",
            icon: UserIcon
        },
        {
            name: "Payments",
            icon: CardIcon
        },
        {
            name: "settings",
            icon: SeetingsIcon
        }
    ],
    2: [
        {
            name: "Support",
            icon: SupportIcon
        },
        {
            name: "Logout",
            icon: LogoutIcon
        }
    ]
}