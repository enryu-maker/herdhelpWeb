import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom'
import FlatList from 'flatlist-react'
import ParentCard from './ParentCard'
import useMediaQuery from '../../Component/useMediaQuery';

// Icons
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009A48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
);

const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export default function ParentOP() {
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()
    const { state } = useLocation();
    // Safety check for data
    const data = state?.data || [];

    function DataGen(Data) {
        let finalData = []
        if (!Data) return [];
        Data.map(a => {
            var dict = {};
            var d = new Date(a.key);
            dict['x'] = moment(d).format("yyyy-MM-DD");
            dict['y'] = a.tags.length
            finalData.push(dict)
        })
        return finalData;
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                    <p className="text-gray-900 font-bold text-sm">{`${label} : ${payload[0].value} Babies`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Sticky Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
                    >
                        <BackIcon />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Babies Report</h1>
                </div>

                <button
                    onClick={() => setShow(!show)}
                    className="p-2 rounded-full bg-[#009A48] hover:bg-[#007f3b] shadow-md transition-colors flex items-center justify-center text-white"
                    title={show ? "Switch to List View" : "Switch to Chart View"}
                >
                    {show ? <ListIcon /> : <ChartIcon />}
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6">
                <div className="max-w-7xl mx-auto">
                    {show ? (
                        /* Chart View */
                        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center h-[500px] w-full border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-700 mb-6">Babies Over Time</h2>
                            <div className="w-full h-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={DataGen(data)} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                        <XAxis
                                            dataKey="x"
                                            angle={-45}
                                            textAnchor="end"
                                            height={60}
                                            tick={{ fill: '#6B7280', fontSize: 12 }}
                                        />
                                        <YAxis
                                            tick={{ fill: '#6B7280', fontSize: 12 }}
                                        >
                                            <Label
                                                angle={-90}
                                                value="Babies"
                                                position="insideLeft"
                                                style={{ textAnchor: 'middle', fill: '#009A48', fontWeight: 'bold' }}
                                            />
                                        </YAxis>
                                        <Tooltip content={<CustomTooltip />} />
                                        <Line
                                            type="monotone"
                                            dataKey="y"
                                            stroke="#009A48"
                                            strokeWidth={3}
                                            dot={{ fill: '#009A48', r: 4 }}
                                            activeDot={{ r: 6 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    ) : (
                        /* List View */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <FlatList
                                list={data}
                                keyExtractor={item => `${item.key}`}
                                renderItem={(item, index) => (
                                    <div key={item.key} className="w-full">
                                        <ParentCard
                                            date={item.key}
                                            data={item.data}
                                            tags={item.tags}
                                        />
                                    </div>
                                )}
                                renderWhenEmpty={() => (
                                    <div className="col-span-full flex flex-col items-center justify-center h-64 text-gray-400">
                                        <p>No babies records found.</p>
                                    </div>
                                )}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
