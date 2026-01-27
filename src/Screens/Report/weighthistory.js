import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import NavBarMain from '../../Component/Nav/navmain';
import Sidenav from '../../Component/Nav/sidenav';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';
import { getTags } from '../../Store/actions';

export default function WeightHistory() {
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tags = useSelector(state => state.Reducers.tags);
  const species = useSelector(state => state.Reducers.cat);
  const id = localStorage.getItem('id');
  const unit = useSelector(state => state.Reducers.unit);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  function finder(list, value) {
    let dataValue = [];
    list?.forEach(a => {
      if (value === a.label) {
        dataValue = a.data;
      }
    });
    return dataValue || [];
  }

  function DataGen(data) {
    let finalData = [];
    data.forEach(a => {
      let dict = {};
      var d = new Date(a.date_from);
      dict['x'] = d.toLocaleString("default", { month: "short" }) + d.getFullYear();
      if (unit) {
        dict["y"] = a.weight;
      } else {
        dict["y"] = a.weight_kg;
      }
      finalData.push(dict);
    });
    return finalData;
  }

  const updateWeight = async () => {
    if (valueBS !== '' && valueMS !== '') {
      setLoading(true);
      setErr('');
      try {
        // Tag format in API call seems to rely on valueBS (Tag Label) directly? 
        // Original logic: `getweighthistory/${id}${valueMS}${valueBS}`
        // valueMS is Species Label, valueBS is Tag Label.
        let { data } = await axiosIns.get(
          `getweighthistory/${id}${valueMS}${valueBS}`,
        );
        if (data && data.length > 0) {
          setValueBS('');
          setValueMS('');
          const final = DataGen(data);
          setLoading(false);
          // Navigate to result
          navigate('/weightHist', {
            state: { data: final }
          });
        } else {
          setValueBS('');
          setValueMS('');
          setLoading(false);
          setErr('History not found');
        }
      } catch (error) {
        setValueBS('');
        setValueMS('');
        setLoading(false);
        setErr(error.message || 'An error occurred');
      }
    } else {
      setErr('Please select both Species and Tag');
    }
  };

  // Helper for Dropdown Options
  const getSpeciesOptions = () => species || [];
  const getTagOptions = () => finder(tags, valueMS) || [];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <Sidenav active={"Weight History"} />

      {/* Main Content - Offset for sidebar width */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-[250px] transition-all duration-300 pt-16 lg:pt-0">

        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white">
          <NavBarMain />
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-[#009A48] mb-6">Weight History</h1>

            {/* Filter Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Species Select */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-gray-700">Species*</label>
                  <div className="relative">
                    <select
                      value={valueMS}
                      onChange={(e) => {
                        setValueMS(e.target.value);
                        setValueBS(""); // Reset tag when species changes
                      }}
                      className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 appearance-none outline-none"
                    >
                      <option value="" disabled>Select Species</option>
                      {getSpeciesOptions().map((opt, idx) => (
                        <option key={idx} value={opt.label}>{opt.label}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Tags Select */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-gray-700">Tags*</label>
                  <div className="relative">
                    <select
                      value={valueBS}
                      onChange={(e) => setValueBS(e.target.value)}
                      disabled={!valueMS}
                      className={`w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 appearance-none outline-none ${!valueMS ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <option value="" disabled>Select Tags</option>
                      {getTagOptions().map((opt, idx) => (
                        <option key={idx} value={opt.label}>{opt.label}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {err && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {err}
                </div>
              )}

              {/* Action Button */}
              <div className="mt-8">
                {loading ? (
                  <div className="flex justify-start">
                    <Loading />
                  </div>
                ) : (
                  <button
                    onClick={updateWeight}
                    className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center transition-all transform hover:-translate-y-1"
                  >
                    <img src={IMAGES.weight} alt="weight" className="w-5 h-5 mr-3 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                    History
                  </button>
                )}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
