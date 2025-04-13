import { useNavigate } from 'react-router-dom'
import { IconType } from 'react-icons'
import {
    FiDollarSign,
    FiHome,
    FiLink,
    FiBook,
    FiPaperclip,
    FiUsers,
} from 'react-icons/fi'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'

const navMenuData: NavMenuProps[] = [
    {
        Icon: FiHome,
        selected: true,
        title: 'Dashboard',
        path: '/dashboard',
        child: [
            {
                Icon: FiUsers,
                selected: false,
                title: 'Analytics',
                path: '/dashboard/analytics',
            },
            {
                Icon: FiDollarSign,
                selected: true,
                title: 'Sales',
                path: '/dashboard/sales',
            },
        ],
    },
    {
        Icon: FiBook,
        selected: false,
        title: 'Pages',
        path: '/pages',
    },
    {
        Icon: FiPaperclip,
        selected: false,
        title: 'Applicators',
        path: '/applicators',
    },
    {
        Icon: FiLink,
        selected: false,
        title: 'ECommerce',
        path: '/ecommerce',
    },
]

type NavMenuProps = {
    Icon: IconType
    selected: boolean
    title: string
    path: string
    child?: ItemProps[]
}

type ItemProps = {
    Icon: IconType
    selected: boolean
    title: string
    path: string
}

const RouteSelect = () => {
    return (
        <div className="space-y-1">
            {navMenuData.map((menu) => (
                <Route {...menu} key={menu.title} />
            ))}
        </div>
    )
}

const RenderNavItem = ({
    Icon,
    title,
    selected,
    isChild,
    path,
}: {
    selected: boolean
    Icon: IconType
    title: string
    isChild?: boolean
    path: string
}) => {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(path)}
            className={`flex items-center justify-between p-2 ${
                selected ? (isChild ? 'bg-slate-800' : 'bg-slate-500') : ''
            } hover:bg-slate-500 rounded cursor-pointer`}
        >
            <div className="flex items-center space-x-4">
                <Icon />
                <span>{title}</span>
            </div>
            {selected ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        </div>
    )
}

const Route = ({ selected, Icon, title, path, child }: NavMenuProps) => {
    return (
        <div>
            <RenderNavItem
                Icon={Icon}
                title={title}
                selected={selected}
                path={path}
            />
            <div className="pl-4">
                {child?.map((menu) => (
                    <RenderNavItem {...menu} isChild key={menu.title} />
                ))}
            </div>
        </div>
    )
}

export default RouteSelect
