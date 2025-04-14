import { FiPlus } from 'react-icons/fi'

export const StatCards = () => {
    return (
        <>
            <Card
                title="Sales"
                value="$230,220"
                pillText="55%"
                trend="up"
                period="6 May - 7 May"
            />
            <Card
                title="Customer"
                value="3200"
                pillText="12%"
                trend="up"
                period="6 May - 7 May"
            />
            <Card
                title="Avg. Revenue"
                value="$1,200"
                pillText="$213"
                trend="down"
                period="6 May - 7 May"
            />
        </>
    )
}

const Card = ({
    title,
    value,
    pillText,
    trend,
    period,
}: {
    title: string
    value: string
    pillText: string
    trend: 'up' | 'down'
    period: string
}) => {
    return (
        <div className="bg-white col-span-4 p-4  shadow-lg rounded-lg text-gray-500">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-gray-500">{title}</h3>
                    <p className="text-3xl text-black font-semibold">{value}</p>
                </div>
                <p className="text-xs ">{period}</p>
            </div>
            <div className="flex items-center">
                <span
                    className={`text-xs flex items-center font-medium pe-1 ${trend === 'up' ? 'text-green-700' : ''}`}
                >
                    {trend === 'up' ? (
                        <FiPlus className="text-green-700" />
                    ) : (
                        <FiPlus />
                    )}{' '}
                    {pillText}
                </span>
                since last month
            </div>
        </div>
    )
}
