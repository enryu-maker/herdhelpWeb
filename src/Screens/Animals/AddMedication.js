import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMedical, getSpecies, getTags } from '../../Store/actions';
import { IMAGES } from "../../Theme/Image";
import Loading from '../../Component/Loading';
import axiosIns from '../../helpers/helpers';

export default function AddMedication() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Logic to fetch data on mount
  React.useEffect(() => {
    dispatch(getSpecies());
    dispatch(getTags());
  }, [dispatch]);

  // State
  const [medicationR, setmedicationR] = useState("");
  const [medicine, setmedicine] = useState("");
  const [dosage, setdosage] = useState("");
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [vaccinateddate, setVaccinateddate] = useState("");
  const [withdrawal_date, setwithdrawal_date] = useState("");
  const [withdrawal, setwithdrawal] = useState(""); // logic used string "Yes"/"No" or object? Original code used setwithdrawal(x.label) or similar. 
  // In original: value={withdrawal} (which seems to be an object or string? DropDown usually takes value.label?)
  // Original Render: <DropDown value={withdrawal} setValue={setwithdrawal} ... options={checking} />
  // checking constant usually has {label: "Yes"}, {label: "No"}.
  // Let's assume simple string for native select or keep logic.

  const [loading, setLoading] = useState(false);

  const id = localStorage.getItem("id");
  const spec = useSelector(state => state.Reducers.cat);
  const tags = useSelector(state => state.Reducers.tags);

  // Logic Constants
  const cond = true;
  const tag_number = true;

  // Options for Withdrawal
  const withdrawalOptions = [
    { label: "Yes" },
    { label: "No" }
  ];

  const clear = () => {
    setmedicationR("");
    setwithdrawal("");
    setdosage("");
    setValueMS("");
    setValueBS(""); // Original code had setValueMS("") twice, assuming BS was meant
    setVaccinateddate("");
    setmedicine("");
    setwithdrawal_date("");
  };

  function addmedical() {
    setLoading(true);
    axiosIns.post('/medication/',
      {
        tag_number: !cond ? `${tag_number}` : `${id}${valueMS}${valueBS}`,
        medication_name: medicine,
        medication_date: vaccinateddate,
        dosage: dosage,
        disease: medicationR,
        withdrawal: withdrawal === "Yes" ? true : false,
        withdrawal_date: withdrawal_date !== "" ? withdrawal_date : null
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      if (response.status === 201) {
        setLoading(false);
        alert("Medication Added Successfully"); // Improved alert
        clear();
        navigate(-1); // Automatically go back on success? Or just clear? Mockup implies a task flow.
      } else {
        setLoading(false);
      }
    })
      .catch(err => {
        setLoading(false);
        alert("Error adding medication");
      });
  }

  function finder(list, value) {
    let dataValue = [];
    list?.forEach(a => {
      if (value === a.label) {
        dataValue = a.data; // dataValue is likely an array of objects {label: "..."}
      }
    });
    return dataValue || [];
  }

  // Icons Helper
  const InputIcon = ({ src }) => (
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <img src={src} className="h-5 w-5 text-gray-400 opacity-50" alt="icon" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="flex items-center p-4 md:p-6 border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#009A48] hover:bg-[#007f3b] text-white shadow-md transition-all"
        >
          <img src={IMAGES.back} alt="back" className="w-5 h-5 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
        </button>
        <h1 className="ml-4 text-2xl font-bold text-gray-800">Add Medication</h1>
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8">

        {/* Card 1: Essential Info */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Species */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Species*</label>
              <div className="relative">
                <select
                  value={valueMS}
                  onChange={(e) => {
                    setValueMS(e.target.value);
                    setValueBS("");
                  }}
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 outline-none shadow-sm"
                >
                  <option value="" disabled>Select Species</option>
                  {spec?.map((opt, idx) => (
                    <option key={idx} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
                
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Tags*</label>
              <div className="relative">
                <select
                  value={valueBS}
                  onChange={(e) => setValueBS(e.target.value)}
                  disabled={!valueMS}
                  className={`w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 outline-none shadow-sm ${!valueMS ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="" disabled>Select Tag</option>
                  {finder(tags, valueMS)?.map((opt, idx) => (
                    <option key={idx} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
                
              </div>
            </div>

            {/* Reason */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Reason for Medication</label>
              <div className="relative">
                <InputIcon src={IMAGES.disease} />
                <input
                  type="text"
                  value={medicationR}
                  onChange={(e) => setmedicationR(e.target.value)}
                  placeholder="Enter reason..."
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-10 outline-none shadow-sm"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Card 2: Treatment Details */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Medicine */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Medicine</label>
              <div className="relative">
                <InputIcon src={IMAGES.medicines} />
                <input
                  type="text"
                  value={medicine}
                  onChange={(e) => setmedicine(e.target.value)}
                  placeholder="Medicine Name"
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-10 outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Medication Date</label>
              <div className="relative">
                <InputIcon src={IMAGES.calender} />
                <input
                  type="date"
                  value={vaccinateddate}
                  onChange={(e) => setVaccinateddate(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-10 outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Dosage */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Dosage</label>
              <div className="relative">
                <InputIcon src={IMAGES.dropper} />
                <input
                  type="text"
                  value={dosage}
                  onChange={(e) => setdosage(e.target.value)}
                  placeholder="e.g. 5ml / 100kg"
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-10 outline-none shadow-sm"
                />
              </div>
            </div>

            {/* Withdrawal */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Withdrawal Period</label>
              <div className="relative">
                <select
                  value={withdrawal}
                  onChange={(e) => setwithdrawal(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 outline-none shadow-sm"
                >
                  <option value="" disabled>Select Period</option>
                  {withdrawalOptions.map((opt, idx) => (
                    <option key={idx} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
                
              </div>
            </div>

            {/* Conditional Withdrawal Date */}
            {withdrawal === "Yes" && (
              <div className="flex flex-col space-y-2 animate-fadeIn">
                <label className="text-sm font-bold text-gray-600 ml-1">Withdrawal Date</label>
                <div className="relative">
                  <InputIcon src={IMAGES.calender} />
                  <input
                    type="date"
                    value={withdrawal_date}
                    onChange={(e) => setwithdrawal_date(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pl-10 outline-none shadow-sm"
                  />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          {loading ? (
            <Loading />
          ) : (
            <button
              onClick={addmedical}
              className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-12 rounded-lg shadow-lg flex items-center transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={IMAGES.med} alt="add" className="w-5 h-5 mr-2 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
              Add Medication
            </button>
          )}
        </div>

      </div>

      {/* Import Helpers that were missing from top level if needed */}
      {/* We need axiosIns import! */}
    </div>
  );
}


