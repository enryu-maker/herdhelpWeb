import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReportCard from './ReportCard';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
import { formatter } from '../../Theme/Theme'; // Keeping formatter import
import Loading from '../../Component/Loading'; // Use provided Loading component

export default function ReportOP() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [label, setLabel] = useState(""); // Title
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();
    const { state } = useLocation();

    // Fetch Data
    async function getData(api) {
        setLoading(true);
        try {
            let { data } = await axiosIns.get(api);
            return data;
        } catch (error) {
            console.error(error);
            return [];
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (state) {
            const { api, label: title } = state;
            setLabel(title);
            getData(api).then(fetchedData => {
                setData(fetchedData);
                setFilteredData(fetchedData);
            });
        }
    }, [state]);

    // Search Logic
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredData(data);
        } else {
            const lowerTerm = searchTerm.toLowerCase();
            const filtered = data.filter(item =>
                (item.tag_number && item.tag_number.toString().toLowerCase().includes(lowerTerm)) ||
                (item.support_tag && item.support_tag.toString().toLowerCase().includes(lowerTerm)) ||
                (item.name && item.name.toLowerCase().includes(lowerTerm))
            );
            setFilteredData(filtered);
        }
    }, [searchTerm, data]);


    // Total Money Logic
    function calculateTotalMoney(list) {
        // Only calculate for specific labels as per original logic
        const validLabels = ['Purchased Animals', 'Sold Animals', 'Lost Animals'];
        if (!validLabels.includes(label)) return null;

        let total = 0;
        list.map(a => {
            if (label === 'Purchased Animals') {
                total += a.price || 0;
            } else {
                total += a.soldprice || 0;
            }
        });
        return total;
    }

    const totalAmount = calculateTotalMoney(data); // Calculate on full data or filtered? Original used full Data.

    return (
        <div className="flex flex-col h-screen bg-gray-50 font-sans">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Left: Back, Title, Count */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 rounded-full bg-[#009A48] text-white hover:bg-[#007f3b] transition-colors shadow-sm"
                        >
                            <img src={IMAGES.back} alt="back" className="w-5 h-5 filter invert brightness-0 saturate-100" style={{ filter: 'brightness(0) invert(1)' }} />
                            {/* Assuming IMAGES.back is black, invert to white if needed or just use standard svg */}
                        </button>

                        <div className="flex items-center space-x-3">
                            <h1 className="text-xl font-bold text-gray-900">{label}</h1>
                            <span className="bg-[#009A48] text-white text-xs font-bold px-2 py-1 rounded-full">
                                {filteredData.length}
                            </span>
                        </div>
                    </div>

                    {/* Right: Search & Filter */}
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <input
                                type="text"
                                placeholder="Search by Tag ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-gray-200 text-sm rounded-lg pl-10 pr-4 py-2 focus:ring-[#009A48] focus:border-[#009A48] outline-none"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-40">
                                <img src={IMAGES.search} alt="search" className="w-4 h-4 invert" />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            {/* Total Money Banner (Conditional) */}
            {totalAmount !== null && (
                <div className="bg-[#009A48] text-white py-2 px-6 text-center shadow-md">
                    <span className="font-bold text-sm tracking-wide mr-2">
                        TOTAL {label.toUpperCase().replace(' ANIMALS', '')} VALUE:
                    </span>
                    <span className="font-bold text-lg">
                        {formatter.format(totalAmount)}
                    </span>
                </div>
            )}

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-24">
                    {loading ? (
                        <div className="col-span-full flex justify-center py-10"><Loading /></div>
                    ) : (
                        filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <ReportCard
                                    key={item.id}
                                    data={item}
                                    onPress={() => {
                                        navigate("/info", {
                                            state: {
                                                data: item,
                                                cond: false,
                                                Label: label
                                            }
                                        });
                                    }}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-400">
                                <p>No records found.</p>
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Sticky Footer Button */}
            <div className="bg-white border-t border-gray-200 p-4 sticky bottom-0 z-20">
                <div className="max-w-3xl py-2 mx-auto flex justify-center">
                    <button
                        onClick={() => navigate('/genratereport', { state: { data: filteredData.length > 0 ? filteredData : data, label: label } })}
                        className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center transition-all transform hover:-translate-y-1"
                    >
                        <img src={IMAGES.file} alt="" className="w-5 h-5 mr-2 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                        Generate Report
                    </button>
                </div>
                <p className="text-xs text-center text-gray-400 mt-4 uppercase tracking-widest">
                    Available Formats: PDF, XLSX, CSV
                </p>
            </div>
        </div>
    );
}

