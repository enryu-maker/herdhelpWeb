import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBarMain from '../../Component/Nav/navmain';
import Sidenav from '../../Component/Nav/sidenav';
import { WeightUnit } from '../../Store/actions';
import { IMAGES } from '../../Theme/Image';

export default function Setting() {
  const [active, setActive] = useState(false);
  const unit = useSelector(state => state.Reducers.unit); // true = Lbs, false = Kg
  const dispatch = useDispatch();

  const settingsOptions = [
    { label: "Lbs", value: true },
    { label: "Kg", value: false }
  ];

  return (
    <div className="flex h-screen bg-white font-sans">
      {/* Sidebar */}
      <Sidenav active={'Setting'} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-[250px] transition-all duration-300 pt-16 lg:pt-0">

        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white">
          <NavBarMain />
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-[#009A48] uppercase tracking-wide mb-8">Setting</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Left Card: Preference Selection */}
              <div
                onClick={() => setActive(!active)}
                className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 cursor-pointer border border-transparent hover:border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-gray-700">Weight</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {unit ? "Lbs" : "Kg"}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${active ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Preferred Measurement Unit
                  </span>
                </div>
              </div>

              {/* Right Card: Options (Conditional) */}
              {active && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="space-y-6">
                    {settingsOptions.map((option, index) => {
                      const isActive = unit === option.value;
                      return (
                        <div
                          key={index}
                          onClick={() => dispatch(WeightUnit(option.value))}
                          className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0 cursor-pointer group"
                        >
                          <span className="text-xl font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                            {option.label}
                          </span>
                          <span className={`px-4 py-1 rounded-full text-sm font-bold transition-all ${isActive
                            ? 'bg-green-100 text-[#009A48]'
                            : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300'
                            }`}>
                            {isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
