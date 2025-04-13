import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts'

const data01 = [
    {
        name: 'Facebook',
        value: 300,
        fill: 'blue',
    },
    {
        name: 'Direct',
        value: 200,
        fill: 'red',
    },
    {
        name: 'Organic',
        value: 400,
        fill: 'black',
    },
    {
        name: 'Referral',
        value: 1000,
        fill: 'grey',
    },
]

const ChannelsGraph = () => {
    return (
        <div className="bg-white col-span-4 overflow-hidden shadow-lg rounded-lg text-gray-500 p-4">
            <div className="font-medium text-black">Channels</div>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Legend
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                            iconType="circle"
                            wrapperStyle={{ paddingBottom: 20 }}
                        />
                        <Pie
                            data={data01}
                            dataKey="value"
                            nameKey="name"
                            cx="40%"
                            cy="40%"
                            outerRadius={80}
                            style={{ borderBottom: '2px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-xs">
                <div className="max-w-[250px] ">
                    More than 1,200,000 sales are made using referral marketing,
                    and 700,000 are from social media.
                </div>
                <button className="font-semibold w-20 border rounded-md bg-gray-200 text-gray-500">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default ChannelsGraph
