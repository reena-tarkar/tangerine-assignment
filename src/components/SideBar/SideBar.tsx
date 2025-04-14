import RouteSelect from './RouteSelect'
import { VscTypeHierarchy } from 'react-icons/vsc'

export const Sidebar = () => {
    return (
        <div className="overflow-y-scroll sticky rounded-md bg-zinc-800 p-3 text-white text-sm text-center">
            <div className="flex justify-center mb-4 gap-1 items-center">
                <VscTypeHierarchy className="h-5 w-5" />
                Material Dashboard PRO
            </div>

            <aside className="text-white p-4">
                <RouteSelect />
            </aside>
        </div>
    )
}
