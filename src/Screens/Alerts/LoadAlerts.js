import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import { useAlert } from 'react-alert';

// Components
import Sidenav from '../../Component/Nav/sidenav';
import NavBarMain from "../../Component/Nav/navmain";
import Loading from "../../Component/Loading";
// import AlertCardComponent from "../../Component/AlertCard"; // Renamed to avoid conflict if needed, or use inline toast

// Helpers & Store
import axiosIns from '../../helpers/helpers';
import { getAlerts, getTags } from '../../Store/actions';
import { IMAGES } from '../../Theme/Image';

// Reusable Form Components (Tailwind) - Defined OUTSIDE to fix focus bug
const FormInput = ({ label, value, onChange, placeholder, type = "text", icon }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-4 border border-gray-200"
      />
      {icon && (
        <div className="absolute right-3 top-3 opacity-40">
          <img src={icon} alt="" className="w-5 h-5" />
        </div>
      )}
    </div>
  </div>
);

const FormSelect = ({ label, value, onChange, options, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 border border-gray-200"
    >
      <option value="">{placeholder}</option>
      {options && options.map((opt, idx) => (
        <option key={idx} value={opt.label || opt.type}>
          {opt.label || opt.type}
        </option>
      ))}
    </select>
  </div>
);

// Alert Card Component - Defined OUTSIDE
const AlertCard = ({ item }) => (
  <div className="bg-gray-50 rounded-xl p-5 mb-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-[#009A48] font-bold text-lg">{item.title}</h3>
        <p className="text-gray-600 text-sm font-medium">Issue: {item.title}</p>
        {item.content && <p className="text-gray-500 text-sm mt-1">{item.content}</p>}
      </div>
      <div className="text-right">
        <span className="text-gray-400 text-xs block">Date: {item.start_date}</span>
        {item.support_tag && (
          <span className="inline-block bg-white border border-gray-200 rounded px-2 py-1 text-xs font-bold text-gray-700 mt-1 shadow-sm">
            Tag: {item.support_tag}
          </span>
        )}
      </div>
    </div>
    {/* Buttons removed as requested */}
  </div>
);

export default function LoadAlerts() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  // Redux State
  const finance = useSelector(state => state.Reducers.alerts); // Mapped to 'finance' in original but it's alerts
  const species = useSelector(state => state.Reducers.cat);
  const tags = useSelector(state => state.Reducers.tags);

  // Local State for Form
  const [valueMS, setValueMS] = useState(""); // Species Label
  const [valueBS, setValueBS] = useState(""); // Tag Label
  const [title, setTitle] = useState(""); // Issue
  const [content, setContent] = useState(""); // Action
  const [date, setDate] = useState(""); // Alert Date
  const [loading, setLoading] = useState(false);

  // Load Data
  useEffect(() => {
    dispatch(getAlerts());
    dispatch(getTags());
  }, [dispatch]);

  // Helper to filter tags by species
  function finder(list, speciesLabel) {
    var dataValue; // Explicitly matching original logic style if needed, though clean version is safer. returning to loose match just in case.
    if (!speciesLabel) return undefined;
    list?.map(a => {
      if (speciesLabel == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }

  // Submit Handler
  const postAlert = async () => {
    const id = localStorage.getItem("id");

    if (title != "" && date != "") {
      setLoading(true);

      const data = JSON.stringify({
        "title": title,
        "content": content,
        "tag_number": valueBS ? `${id}${valueMS}${valueBS}` : "",
        "support_tag": valueBS,
        "start_date": moment(date).format('YYYY-MM-DD'),
      });

      await axiosIns.post('alerts/', data, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(Response => {
          if (Response.status == 201) {
            dispatch(getAlerts());
            alert.success("Alert Added Sucessfull"); // Typo match original "Sucessfull"
            // Reset Form
            setTitle('');
            setContent('');
            setValueBS('');
            setDate('');
          } else {
            alert.error("Internal Server Error");
          }
        })
        .catch(err => {
          alert.error(err);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert.error("Required Fields cannot be empty");
    }
  };

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidenav active={'alerts'} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen relative md:ml-64">
        {/* Using md:ml-64 to offset fixed sidebar if Sidenav is fixed. 
                 If Sidenav is relative in this new layout, remove marginLeft. 
                 Based on previous task, Sidenav is fixed. 
             */}
        <NavBarMain page={'alerts'} />

        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col md:flex-row">

            {/* LEFT COLUMN: ACTIVE ALERTS */}
            <div className="flex-1 bg-white p-6 overflow-y-auto border-r border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Active Alerts</h2>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                  {finance ? finance.length : 0} RECORDS FOUND
                </span>
              </div>

              <div className="space-y-4">
                {finance && finance.length > 0 ? (
                  finance.map((item) => (
                    <AlertCard key={item.id} item={item} />
                  ))
                ) : (
                  <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-400">
                    <p>No active alerts found.</p>
                  </div>
                )}

                {/* Placeholder for "Additional alerts will appear here..." effect */}
                <div className="h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300 text-sm italic">
                  Additional alerts will appear here...
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SET NEW ALERT */}
            <div className="w-full md:w-[400px] lg:w-[450px] bg-white p-8 shadow-[-5px_0_30px_-10px_rgba(0,0,0,0.05)] overflow-y-auto z-10">
              <h2 className="text-xl font-bold text-gray-800 mb-8">Set New Alert</h2>

              <FormSelect
                label="Species*"
                placeholder="Select Species"
                value={valueMS}
                onChange={(val) => {
                  setValueMS(val);
                  setValueBS(""); // Reset tag when species changes
                }}
                options={species}
              />

              <FormSelect
                label="Tags*"
                placeholder="Select Animal Tag"
                value={valueBS}
                onChange={setValueBS}
                options={finder(tags, valueMS)}
              />

              <FormInput
                label="Issue?*"
                placeholder="Describe the issue..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                icon={IMAGES.issue} // Ensure IMAGES.issue exists or fallback
              />

              <FormInput
                label="What needs to be Done?*"
                placeholder="Required actions..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <FormInput
                label="Alert Date*"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <button
                onClick={postAlert}
                disabled={loading}
                className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-4 rounded-lg shadow-md mt-6 flex items-center justify-center transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loading /> : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Alert
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
