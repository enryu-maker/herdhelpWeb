import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from "../../Theme/Image";
import Loading from '../../Component/Loading';
import axiosIns from '../../helpers/helpers';
import { useAlert } from 'react-alert';
import AlertCard from '../../Component/AlertCard';
import { getSpecies, getTags } from '../../Store/actions';

export default function Weight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  // State
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);

  // Redux
  const species = useSelector(state => state.Reducers.cat);
  const tags = useSelector(state => state.Reducers.tags);
  const unit = useSelector(state => state.Reducers.unit);
  const id = localStorage.getItem("id");

  // Fetch Data on Mount
  useEffect(() => {
    dispatch(getSpecies());
    dispatch(getTags());
  }, [dispatch]);

  // Helper to find tags for selected species
  function finder(list, value) {
    let dataValue = [];
    list?.forEach(a => {
      if (value === a.label) {
        dataValue = a.data;
      }
    });
    return dataValue || [];
  }

  async function updateWeight() {
    if (valueBS !== "" && weight !== "" && weight !== 0) {
      setLoading(true);
      try {
        await axiosIns.patch(`animals/${id}${valueMS}${valueBS}`, {
          'weight': unit === true ? weight : Math.round(weight / 0.45359237),
          'weight_kg': unit === false ? weight : Math.round(weight * 0.45359237),
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((Response) => {
          if (Response.status === 200) {
            alert.success(<AlertCard msg={"Weight Updated Successfully"} type={true} />);
            setLoading(false);
            // Optional: navigate back or clear form
            navigate(-1);
          } else {
            alert.error(<AlertCard msg={"Internal server error"} type={false} />);
            setLoading(false);
          }
        });
      } catch (err) {
        alert.error(<AlertCard msg={err.message || "Error Updating"} type={false} />);
        setLoading(false);
      }
    } else {
      alert.error(<AlertCard msg={"Invalid Input"} type={false} />);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="flex items-center p-4 md:p-6 mb-4 border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#009A48] hover:bg-[#007f3b] text-white shadow-md transition-all"
        >
          <img src={IMAGES.back} alt="back" className="w-5 h-5 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
        </button>
        <h1 className="ml-4 text-2xl font-bold text-gray-900">Update Weight</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Main Card */}
        <div className="bg-slate-50 rounded-xl p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

            {/* Species Select */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Species*</label>
              <div className="relative">
                <select
                  value={valueMS}
                  onChange={(e) => {
                    setValueMS(e.target.value);
                    setValueBS(""); // Reset tag
                  }}
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 outline-none shadow-sm h-12"
                >
                  <option value="" disabled>Select Species</option>
                  {species?.map((opt, idx) => (
                    <option key={idx} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
                
              </div>
            </div>

            {/* Tags Select */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Tags*</label>
              <div className="relative">
                <select
                  value={valueBS}
                  onChange={(e) => setValueBS(e.target.value)}
                  disabled={!valueMS}
                  className={`w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 outline-none shadow-sm h-12 ${!valueMS ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="" disabled>Select Tag</option>
                  {finder(tags, valueMS)?.map((opt, idx) => (
                    <option key={idx} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
                
              </div>
            </div>

            {/* Weight Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Weight</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none bg-gray-100/50 rounded-l-lg border-r border-gray-200">
                  <img src={IMAGES.scale} className="h-5 w-5 text-gray-500 opacity-60" alt="scale" />
                </div>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-white border border-gray-200 text-gray-700 text-lg font-medium rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-12 pr-12 outline-none shadow-sm h-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <span className="text-gray-400 font-bold text-xs uppercase">{unit ? 'LB' : 'KG'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          {loading ? (
            <Loading />
          ) : (
            <button
              onClick={updateWeight}
              className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={IMAGES.update || IMAGES.refresh} alt="update" className="w-5 h-5 mr-2 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
              Update
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
