import Dashboard from './components/Dashboard/Dashboard'
import { Sidebar } from './components/SideBar/SideBar'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-300">
            <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    )
}
