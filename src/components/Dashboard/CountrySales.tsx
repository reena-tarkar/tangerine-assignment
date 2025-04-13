import Flag from '../../assets/images/USA.png'

const CountrySales = () => {
    const data = [
        {
            name: 'United States',
            sales: '2,500',
            bounce: '29.9%',
        },
        {
            name: 'United States',
            sales: '3,900',
            bounce: '31.9%',
        },
        {
            name: 'Great Britain',
            sales: '1,500',
            bounce: '42.9%',
        },
        {
            name: 'Great Britain',
            sales: '500',
            bounce: '51.9%',
        },
    ]

    const Row = ({
        name,
        sales,
        bounce,
        index,
    }: {
        name: string
        sales: string
        bounce: string
        index: number
    }) => {
        return (
            <div
                className={`py-4 px-4 border-b-2 ${index % 2 !== 0 && 'border-b-0'}  grid grid-cols-12`}
            >
                <div className="col-span-6">
                    <div className="flex items-center gap-4">
                        <img src={Flag} className="w-5 h-5" />
                        <div>
                            <div>Country:</div>
                            <div>{name}</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div>Sales:</div>
                    <div>{sales}</div>
                </div>
                <div className="col-span-3">
                    <div>Bounce:</div>
                    <div>{bounce}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white col-span-4 overflow-hidden shadow-lg rounded-lg text-gray-500 ">
            <div className="p-4 font-medium text-black">Sales by Country</div>
            {data.map((d, index) => (
                <Row {...d} index={index} key={d.name + index} />
            ))}
        </div>
    )
}

export default CountrySales
