import { StatCards } from './StatCards'
import RevenueGraph from './RevenueGraph'
import ChannelsGraph from './ChannelsGraph'
import AgeGraph from './AgeGraph'
import CountrySales from './CountrySales'

export const Grid = () => {
    return (
        <div className="px-4">
            {' '}
            Sales
            <div className="grid gap-3 grid-cols-12">
                <StatCards />
                <ChannelsGraph />
                <RevenueGraph />
                <AgeGraph />
                <CountrySales />
            </div>
        </div>
    )
}
