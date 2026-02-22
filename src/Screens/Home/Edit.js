import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { COLORS } from '../../Theme/Theme';
import { IMAGES } from '../../Theme/Image';
import { checking } from "../../Component/Constants";
import useMediaQuery from '../../Component/useMediaQuery';

// Helper component for Icon + Input/Select
const InputField = ({ label, icon, type = "text", value, onChange, placeholder, options, disabled, isSelect = false }) => (
  <div className="flex flex-col space-y-2 w-full">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src={icon} alt="" className="h-5 w-5 opacity-60" />
      </div>
      {isSelect ? (
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full pl-10 pr-8 py-3 bg-white border border-transparent rounded-lg text-gray-700 text-sm focus:ring-2 focus:ring-[#009A48] focus:border-transparent outline-none shadow-sm appearance-none"
        >
          <option value="" disabled>Select Option</option>
          {options && options.map((opt, idx) => (
            <option key={idx} value={opt.label || opt.value}>{opt.label || opt.value}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full pl-10 pr-4 py-3 bg-white border border-transparent rounded-lg text-gray-700 text-sm focus:ring-2 focus:ring-[#009A48] focus:border-transparent outline-none shadow-sm"
        />
      )}
      {isSelect && (
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      )}
    </div>
  </div>
);

export default function Edit() {
  const navigate = useNavigate();

  // State
  const [name, setName] = useState("");
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState(""); // gender type
  const [valueBST, setValueBST] = useState(""); // gender label
  const [bought, setBought] = useState('');
  const [dobt, setDobt] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [vaccinated, setVaccinated] = useState("");
  const [Breed, setBreed] = useState("");
  const [registration, setRegistration] = useState("");

  // Redux
  const species = useSelector(state => state.Reducers.cat);
  const gender = useSelector(state => state.Reducers.gender);
  const unit = useSelector(state => state.Reducers.unit);

  const matches = useMediaQuery('(min-width:820px)');

  // Logic for Gender based on Species
  function finder(list, value) {
    let dataValue = [];
    list?.forEach(a => {
      if (value === a.label) {
        dataValue = a.data;
      }
    });
    return dataValue || [];
  }

  return (
    <div className="flex h-screen bg-gray-50 flex-col font-sans">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center shadow-sm sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="h-10 w-10 bg-[#009A48] rounded-full flex items-center justify-center shadow-md hover:bg-[#007f3b] transition-colors mr-4"
        >
          <img src={IMAGES.back} alt="back" className="h-6 w-6 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Edit</h1>
      </div>

      {/* Content Form */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center">
        <div className="bg-[#EAECEF] w-full max-w-4xl rounded-2xl p-6 md:p-10 shadow-sm h-fit">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* Name */}
            <InputField
              label="Name*"
              icon={IMAGES.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Species */}
            <InputField
              label="Species*"
              icon={IMAGES.dog} // Assuming generic animal icon if species specific not avail
              isSelect
              value={valueMS}
              options={species}
              onChange={(e) => {
                setValueMS(e.target.value);
                setValueBST("");      // Reset gender on species change
                setValueBS("");
              }}
            />

            {/* Gender */}
            <InputField
              label="Gender*"
              icon={IMAGES.name} // Or specific gender icon if available
              isSelect
              value={valueBST}
              options={finder(gender, valueMS)}
              onChange={(e) => {
                const selected = finder(gender, valueMS).find(opt => opt.label === e.target.value);
                setValueBST(e.target.value);
                if (selected) setValueBS(selected.type);
              }}
            />

            {/* Purchased */}
            <InputField
              label="Purchased*"
              icon={IMAGES.money}
              isSelect
              value={bought}
              options={checking}
              onChange={(e) => setBought(e.target.value)}
            />

            {/* Price */}
            <InputField
              label="Price"
              icon={IMAGES.money}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            {/* Date of Purchased */}
            <InputField
              label="Date of Purchased"
              icon={IMAGES.calender}
              type="date"
              value={dobt}
              onChange={(e) => {
                const d = moment(e.target.value).format("YYYY-MM-DD");
                setDobt(d);
              }}
            />

            {/* Age */}
            <InputField
              label="Age"
              icon={IMAGES.age}
              // placeholder="e.g. 2 years"
              value={""} // Logic from original was empty
              onChange={() => { }}
            />

            {/* Weight */}
            <InputField
              label="Weight"
              icon={unit ? IMAGES.lbs : IMAGES.scale}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            {/* Vaccinated */}
            <InputField
              label="Vaccinated"
              icon={IMAGES.name} // Or appropriate icon
              isSelect
              value={vaccinated}
              options={checking}
              onChange={(e) => setVaccinated(e.target.value)}
            />

            {/* Breed */}
            <InputField
              label="Breed"
              icon={IMAGES.dog}
              placeholder="e.g. Angus"
              value={Breed}
              onChange={(e) => setBreed(e.target.value)}
            />

          </div>

          {/* Registration - Full Width */}
          <div className="mt-8 flex justify-center">
            <div className="w-full md:w-1/2">
              <InputField
                label="# Registration"
                icon={IMAGES.name} // Or proper icon
                placeholder="Enter registration number"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-10 flex justify-center">
            <button
              className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-12 rounded-lg shadow-md flex items-center transition-transform transform hover:-translate-y-1"
            >
              <img src={IMAGES.update} alt="update" className="w-5 h-5 mr-3 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
              Update
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

