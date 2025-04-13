import { HiUserCircle } from 'react-icons/hi2'
import { IoIosSettings } from 'react-icons/io'

export const TopBar = () => {
    return (
        <div className="px-4 mb-8 mt-2">
            <div className="flex items-center justify-between p-0.5">
                <div></div>
                <div className="flex gap-2 items-center">
                    <input
                        type="search"
                        placeholder="Search here"
                        className="bg-transparent border border-gray-400 rounded p-1 px-3 w-40 outline-none"
                    />
                    <IoIosSettings className="text-gray-600 w-5 h-5" />
                    <HiUserCircle className="text-gray-600 w-5 h-5" />
                </div>
            </div>
        </div>
    )
}
