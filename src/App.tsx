import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Sidebar } from './components/SideBar/SideBar'

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-300">
                <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
                    <Sidebar />
                    <main>
                        <Router />
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
}
