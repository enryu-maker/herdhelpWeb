import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import NavBarMain from '../../Component/Nav/navmain';
import Sidenav from '../../Component/Nav/sidenav';
import { IMAGES } from '../../Theme/Image';
import axiosIns from '../../helpers/helpers';
import Loading from '../../Component/Loading';

export default function Parents() {
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const tags = useSelector(state => state.Reducers.tags);
  const species = useSelector(state => state.Reducers.cat);
  const id = localStorage.getItem('id');

  function finder(list, value) {
    let dataValue = [];
    list?.forEach(a => {
      if (value === a.label) {
        dataValue = a.data;
      }
    });
    return dataValue || [];
  }

  async function findChildren() {
    setLoading(true);
    setErr('');
    try {
      // Logic from original: babiesbydate/${id}${valueMS}${valueBS}
      let { data } = await axiosIns.get(
        `babiesbydate/${id}${valueMS}${valueBS}`,
      );

      if (data) {
        setValueBS('');
        setValueMS('');
        setLoading(false);
        navigate('/parentop', {
          state: {
            data: data
          }
        });
      } else {
        setValueBS('');
        setValueMS('');
        setLoading(false);
        setErr('Babies Not found');
      }
    } catch (e) {
      setValueBS('');
      setValueMS('');
      setLoading(false);
      setErr('Server Error');
    }
  }

  // Helpers for Dropdown
  const getSpeciesOptions = () => species || [];
  const getTagOptions = () => finder(tags, valueMS) || [];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <Sidenav active={"Parents"} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-[250px] transition-all duration-300 pt-16 lg:pt-0">

        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white">
          <NavBarMain />
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-[#009A48] mb-6">Search Parents</h1>

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
                      <option value="" disabled>Select species</option>
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
                      <option value="" disabled>Select tags</option>
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

              {/* Search Button */}
              <div className="mt-8">
                {loading ? (
                  <div className="flex justify-start"><Loading /></div>
                ) : (
                  <button
                    onClick={findChildren}
                    className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-8 rounded-lg shadow-md flex items-center transition-all transform hover:-translate-y-1"
                  >
                    <img src={IMAGES.parents || IMAGES.search} alt="search" className="w-5 h-5 mr-3 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                    Search
                  </button>
                )}
              </div>
            </div>

            {/* Placeholder / Instructions Area */}
            {/*
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center text-center bg-gray-50/50 min-h-[300px]">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <img
                  src={IMAGES.search}
                  alt="search"
                  className="w-8 h-8 opacity-30"
                />
              </div>
              <p className="text-gray-600 font-medium text-lg mb-1">
                Use the filters above to find parent records in your herd.
              </p>
              <p className="text-gray-400 text-sm">
                Select at least one species to begin.
              </p>
            </div>
            */}

          </div>
        </div>
      </div>
    </div>
  );
}
