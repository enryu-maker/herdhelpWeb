import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';

export default function Genratereport() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { label } = state || {}; // Handle potential missing state safely

    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState([]); // List of available fields from API
    const [selectedFields, setSelectedFields] = useState({}); // State for checkbox values

    // Fetch Fields
    useEffect(() => {
        axiosIns.get("getfields/")
            .then(res => {
                const fetchedFields = res.data?.reportdata || res.data || [];
                // The API seems to return { reportdata: [...] } or just [...] based on legacy usage `data['reportdata']`
                // Legacy: list={data['reportdata']} implies res.data has a key 'reportdata'
                setFields(Array.isArray(fetchedFields) ? fetchedFields : (res.data?.reportdata || []));

                // Optional: Pre-select all or specific fields if needed. For now, empty as per legacy.
            })
            .catch(err => {
                console.error("Error fetching fields:", err);
            });
    }, []);

    const toggleField = (fieldName) => {
        setSelectedFields(prev => ({
            ...prev,
            [fieldName]: !prev[fieldName]
        }));
    };

    const generate = () => {
        setLoading(true);
        axiosIns
            .post(
                'reports/generate/',
                {
                    reportdata: selectedFields,
                    filter: label,
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                },
            )
            .then(res => {
                setLoading(false);
                navigate('/Download', { state: { data: res.data } });
            })
            .catch(err => {
                setLoading(false);
                console.error("Error generating report:", err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
                <div className="max-w-5xl mx-auto flex items-center space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full bg-[#009A48] hover:bg-green-700 group transition-colors shadow-sm"
                    >
                        {/* Using a filter to invert color on hover or just simple SVG logic */}
                        <img
                            src={IMAGES.back}
                            alt="back"
                            className="w-5 h-5 opacity-60 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all"
                        />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Report Generate</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

                    {/* Card Header */}
                    <div className="mb-8 border-b border-gray-100 pb-4">
                        <div className="flex items-center space-x-3 mb-2">
                            {/* Icon for section */}
                            <img src={IMAGES.filter} alt="" className="w-5 h-5 text-[#009A48]" style={{ filter: 'invert(38%) sepia(93%) saturate(1352%) hue-rotate(101deg) brightness(98%) contrast(105%)' }} />
                            <h2 className="text-lg font-bold text-gray-800">Select Fields for Export</h2>
                        </div>
                        <p className="text-sm text-gray-500 ml-8">
                            Choose the specific data points you want to include in your generated report.
                        </p>
                    </div>

                    {/* Fields Grid */}
                    {loading && fields.length === 0 ? (
                        <div className="flex justify-center py-20"><Loading /></div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {fields.map((field, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleField(field)}
                                    className="flex items-center space-x-3 cursor-pointer group py-2"
                                >
                                    {/* Custom Checkbox */}
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${selectedFields[field]
                                            ? 'bg-[#009A48] border-[#009A48]'
                                            : 'bg-white border-gray-300 group-hover:border-[#009A48]'
                                        }`}>
                                        {selectedFields[field] && (
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>

                                    <span className={`text-base font-medium transition-colors ${selectedFields[field] ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                                        }`}>
                                        {field}
                                    </span>
                                </div>
                            ))}
                            {fields.length === 0 && !loading && (
                                <div className="col-span-full text-center text-gray-400 py-10">
                                    No fields available.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="bg-white border-t border-gray-200 p-6 sticky bottom-0 z-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    {loading ? (
                        <Loading />
                    ) : (
                        <button
                            onClick={generate}
                            className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-12 rounded-lg shadow-lg flex items-center transition-all transform hover:-translate-y-1 w-full md:w-auto justify-center"
                        >
                            <img src={IMAGES.file} alt="" className="w-5 h-5 mr-2 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                            Generate Report
                        </button>
                    )}
                    <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">
                        Available Formats: PDF, XLSX, CSV
                    </p>
                </div>
            </div>
        </div>
    );
}

