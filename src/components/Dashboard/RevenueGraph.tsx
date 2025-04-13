import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Line,
    LineChart,
    Legend,
} from 'recharts'

const data = [
    {
        name: 'April',
        first: 0,
        second: 50,
    },
    {
        name: 'May',
        first: 20,
        second: 100,
    },
    {
        name: 'June',
        first: 40,
        second: 200,
    },
    {
        name: 'July',
        first: 100,
        second: 200,
    },
    {
        name: 'August',
        first: 150,
        second: 400,
    },
    {
        name: 'September',
        first: 210,
        second: 380,
    },
    {
        name: 'October',
        first: 300,
        second: 500,
    },
    {
        name: 'November',
        first: 290,
        second: 480,
    },
    {
        name: 'December',
        first: 300,
        second: 700,
    },
]

const RevenueGraph = () => {
    return (
        <div className="bg-white col-span-8 overflow-hidden shadow-lg rounded-lg text-gray-500">
            <div className="p-4 font-medium text-black">Revenue</div>

            <div className="h-80 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid />
                        <Legend verticalAlign="top" align="left" height={50} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Line
                            name="Google Ads"
                            type="linear"
                            dataKey="second"
                            stroke="black"
                        />
                        <Line
                            name="Facebook Ads"
                            type="linear"
                            dataKey="first"
                            stroke="blue"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RevenueGraph
