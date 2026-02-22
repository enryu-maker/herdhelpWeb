import React from 'react'
import FlatList from 'flatlist-react'
import { useNavigate } from 'react-router-dom'
import { COLORS } from '../../Theme/Theme' // Kept for safety if used elsewhere or color constants needed
import useMediaQuery from '../../Component/useMediaQuery'

export default function ParentCard({
    date,
    onPress,
    data,
    tags
}) {
    const navigation = useNavigate()
    const matches = useMediaQuery('(min-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')

    return (
        <button
            onClick={() => {
                navigation("/parentopp", {
                    state: {
                        data: data,
                        date: date
                    }
                })
            }}
            className="group w-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 p-5 flex flex-col items-start text-left relative overflow-hidden"
        >
            {/* Top Row: Date and Count Badge */}
            <div className="flex justify-between items-center w-full mb-4">
                <span className="text-[#009A48] font-bold text-lg border-b-2 border-[#009A48]/20 pb-0.5">
                    {date}
                </span>

                <span className="bg-[#009A48] text-white font-bold text-sm h-8 w-8 rounded-full flex items-center justify-center shadow-sm">
                    {tags.length}
                </span>
            </div>

            {/* Tags Section */}
            <div className="w-full">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Tag Numbers
                </p>
                <div className="bg-gray-50 rounded-lg p-3 w-full">
                    <ul className="list-disc list-inside space-y-1">
                        <FlatList
                            list={tags}
                            renderItem={(item, index) => (
                                <li key={index} className="text-gray-700 text-sm font-medium pl-1">
                                    {item}
                                </li>
                            )}
                            renderWhenEmpty={() => (
                                <li className="text-gray-400 text-sm italic">No tags listed</li>
                            )}
                        />
                    </ul>
                </div>
            </div>

            {/* Hover Decoration */}
            <div className="absolute right-0 bottom-0 h-16 w-16 bg-[#009A48] opacity-5 rounded-tl-full -mr-4 -mb-4 transition-transform group-hover:scale-150 duration-500"></div>
        </button>
    )
}
