import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Bar,
    BarChart,
} from 'recharts'

const data = [
    {
        name: '16-20',
        value: 15,
    },
    {
        name: '21-25',
        value: 20,
    },
    {
        name: '26-30',
        value: 13,
    },
    {
        name: '31-36',
        value: 60,
    },
    {
        name: '36-42',
        value: 20,
    },
    {
        name: '42+',
        value: 15,
    },
]

const AgeGraph = () => {
    return (
        <div className="bg-white col-span-8 overflow-hidden shadow-lg rounded-lg text-gray-500">
            <div className="p-4 font-medium text-black">Sales by Age</div>
            <div className="h-80 px-4 mt-8">
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                    >
                        <XAxis type="number" />
                        <YAxis type="category" width={70} dataKey="name" />

                        <Bar dataKey="value" fill="blue" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AgeGraph
