import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import useMediaQuery from '../../Component/useMediaQuery';

// Icons
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009A48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

export default function WeightPage() {
    const unit = useSelector(state => state.Reducers.unit)
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:460px)')

    const navigate = useNavigate()
    const { state } = useLocation();
    // Safety check
    const data = state?.data || [];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                    <p className="text-gray-900 font-bold text-sm">{`${label} : ${payload[0].value} ${unit ? "Lbs" : "Kg"}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Sticky Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm flex items-center space-x-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
                >
                    <BackIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Weight History</h1>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 flex flex-col items-center">
                <div className="max-w-5xl w-full">
                    {/* Chart Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center h-[500px] w-full border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-700 mb-6">Weight Over Time</h2>
                        <div className="w-full h-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
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
                                            value={unit ? "Weight (LBS)" : "Weight (KG)"}
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
                        {data.length === 0 && (
                            <p className="text-gray-400 mt-4">No weight data available to display.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
