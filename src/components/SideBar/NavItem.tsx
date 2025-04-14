import { IconType } from 'react-icons'
import {
    FiDollarSign,
    FiHome,
    FiBook,
    FiPaperclip,
    FiUsers,
} from 'react-icons/fi'

export type NavMenuProps = {
    Icon: IconType
    title: string
    path: string
    child?: ItemProps[]
}

export type ItemProps = {
    Icon: IconType
    title: string
    path: string
}

export const navMenuData: NavMenuProps[] = [
    {
        Icon: FiHome,
        title: 'Dashboard',
        path: '/dashboard',
        child: [
            {
                Icon: FiUsers,
                title: 'Analytics',
                path: '/dashboard/analytics',
            },
            {
                Icon: FiDollarSign,
                title: 'Sales',
                path: '/dashboard/sales',
            },
        ],
    },
    {
        Icon: FiBook,
        title: 'ECommerce',
        path: '/e-commerce',
    },
    {
        Icon: FiPaperclip,
        title: 'Applicators',
        path: '/applicators',
    },
]
