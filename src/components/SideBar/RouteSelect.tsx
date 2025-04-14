import { useNavigate, useLocation } from 'react-router-dom'
import { IconType } from 'react-icons'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'
import { navMenuData, NavMenuProps } from './NavItem'

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
    isChild,
    path,
}: {
    Icon: IconType
    title: string
    isChild?: boolean
    path: string
}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const isSelected = pathname.includes(path)

    return (
        <div
            onClick={() => navigate(path)}
            className={`flex items-center justify-between p-2 ${
                isSelected ? (isChild ? 'bg-slate-800' : 'bg-slate-500') : ''
            } ${isChild ? 'hover:bg-slate-800' : 'hover:bg-slate-500'} rounded cursor-pointer`}
        >
            <div className="flex items-center space-x-4">
                <Icon />
                <span>{title}</span>
            </div>
            {!isChild ? (
                isSelected ? (
                    <HiOutlineChevronDown />
                ) : (
                    <HiOutlineChevronUp />
                )
            ) : (
                <></>
            )}
        </div>
    )
}

const Route = ({ Icon, title, path, child }: NavMenuProps) => {
    return (
        <div>
            <RenderNavItem Icon={Icon} title={title} path={path} />
            <div className="pl-4">
                {child?.map((menu) => (
                    <RenderNavItem {...menu} isChild key={menu.title} />
                ))}
            </div>
        </div>
    )
}

export default RouteSelect
