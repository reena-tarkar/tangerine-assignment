import RouteSelect from './RouteSelect'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { VscTypeHierarchy } from 'react-icons/vsc'

const Dashboard = () => <h1>Dashboard</h1>
const Analytics = () => <h1>Analytics</h1>
const Sales = () => <h1>Sales</h1>
const Pages = () => <h1>Pages</h1>
const Applicators = () => <h1>Applicators</h1>
const ECommerce = () => <h1>ECommerce</h1>

export const Sidebar = () => {
    return (
        <div className="overflow-y-scroll sticky rounded-md bg-zinc-800 p-3 text-white text-sm text-center">
            <div className="flex justify-center mb-4 gap-1 items-center">
                <VscTypeHierarchy className="h-5 w-5" />
                Material Dashboard PRO
            </div>
            <Router>
                <div className="flex">
                    <aside className="text-white p-4">
                        <RouteSelect />
                    </aside>
                    <main>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route
                                path="/dashboard/analytics"
                                element={<Analytics />}
                            />
                            <Route
                                path="/dashboard/sales"
                                element={<Sales />}
                            />
                            <Route path="/pages" element={<Pages />} />
                            <Route
                                path="/applicators"
                                element={<Applicators />}
                            />
                            <Route path="/ecommerce" element={<ECommerce />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    )
}
