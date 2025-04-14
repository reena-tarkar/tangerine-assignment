import { RouteObject } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Applicators from '../pages/Applicators'
import Analytics from '../pages/Dashboard/Analytics'
import ECommerce from '../pages/ECommerce'
import Sales from '../pages/Dashboard/Sales'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'dashboard/analytics', element: <Analytics /> },
            { path: 'dashboard/sales', element: <Sales /> },
        ],
    },
    { path: 'e-commerce', element: <ECommerce /> },
    { path: 'applicators', element: <Applicators /> },
]
