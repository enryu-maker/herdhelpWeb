import React, { useState } from "react";
import { IMAGES } from "../../Theme/Image";
import { COLORS, SIZES, FONTS } from "../../Theme/Theme";
import { checking } from "../../Component/Constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { baseURL } from "../../helpers/helpers";
import { getGender, getHerds, getOverview, getSpecies, getTags } from "../../Store/actions";
import ImageUploading from 'react-images-uploading';
import Loading from "../../Component/Loading";
import axios from "axios";
import moment from 'moment';
import AlertCard from "../../Component/AlertCard";
import { useAlert } from "react-alert";
import useMediaQuery from "../../Component/useMediaQuery";

// Icons
const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009A48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

// Reusable Input Component - Defined OUTSIDE
const FormInput = ({ label, type = "text", value, onChange, placeholder, icon }) => (
  <div className="flex flex-col">
    <label className="text-gray-600 text-sm font-medium mb-1">{label}</label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50">
          <img src={icon} alt="" className="w-5 h-5" />
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 ${icon ? 'pl-10' : ''}`}
      />
    </div>
  </div>
);

// Reusable Select Component - Defined OUTSIDE
const FormSelect = ({ label, value, onChange, options, placeholder = "Select Option", optionLabelKey = "label" }) => (
  <div className="flex flex-col">
    <label className="text-gray-600 text-sm font-medium mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => {
        const selected = options?.find(opt => opt[optionLabelKey] === e.target.value || opt.label === e.target.value);
        onChange(selected || { label: e.target.value });
      }}
      className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
    >
      <option value="">{placeholder}</option>
      {options && options.map((opt, idx) => (
        <option key={idx} value={opt[optionLabelKey] || opt.label}>
          {opt.label || opt[optionLabelKey]}
        </option>
      ))}
    </select>
  </div>
);

// Header Component - Defined OUTSIDE
const HeaderBar = ({ navigate }) => (
  <div className="bg-white border-b border-gray-200 px-6 py-6 sticky top-0 z-30 shadow-sm">
    <div className=" mx-auto flex items-center space-x-4">
      <button
        onClick={() => navigate(-1)}
        className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
      >
        <BackIcon />
      </button>
      <h1 className="text-2xl font-bold text-gray-900">Add Animal</h1>
    </div>
  </div>
);

export default function AddAnimals() {
  const [bred, setBred] = useState(false);
  const [valueMS, setValueMS] = useState("");
  const [valueBS, setValueBS] = useState("");
  const [valueBST, setValueBST] = useState("");
  const [age, setAge] = useState(0);
  const [Breed, setBreed] = useState("");
  const [tag, setTag] = useState("");
  const [price, setPrice] = useState(0);
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const [dobt, setDobt] = useState(null);
  const [vaccinated, setVaccinated] = useState(false);
  const [vaccinateddate, setVaccinateddate] = useState(null);
  const [bought, setBought] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [registration, setRegistration] = React.useState("");
  const species = useSelector(state => state.Reducers.cat)
  const unit = useSelector(state => state.Reducers.unit)
  const [weight30, setWeight30] = useState(0);
  const [weight60, setWeight60] = useState(0);
  const [weight90, setWeight90] = useState(0);
  const [profile_pic, setprofile_pic] = React.useState([]);
  const [lease, setlease] = React.useState(false);
  const dispatch = useDispatch()
  const id = localStorage.getItem("id")
  const navigate = useNavigate()
  const alert = useAlert()

  const clear = () => {
    setWeight('');
    setTag('');
    setRegistration('');
    setAge('');
    setBreed('');
    setMother('');
    setFather('');
    setPrice('');
    setName('');
  };

  React.useEffect(() => {
    dispatch(getHerds())
    dispatch(getSpecies())
    dispatch(getGender())
  }, [])

  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  function findertype(list, value, type, setValue) {
    list?.map(a => {
      if (value == a.label) {
        a.data.map(a => {
          if (type == a.label) {
            setValue(a.type)
          }
        });
      }
    });
  }

  function isEnableSignIn() {
    return true
  }
  const onChange = (imageList) => {
    setprofile_pic(imageList);
  };
  const token = useSelector(state => state.Reducers.authToken)
  const gender = useSelector(state => state.Reducers.gender)

  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }

  function postAnimal() {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('tag_number', `${id}${valueMS}${tag}`);
    formData.append('registration', registration);
    formData.append('support_tag', tag);
    formData.append('gender', valueBS);
    formData.append('gender_name', valueBST);
    formData.append('species', valueMS);
    if (bought == "No") {
      formData.append('birth_date', dobt);
    }
    formData.append('leased', lease);
    formData.append('mother_supporttag', mother != '' ? mother : '');
    formData.append(
      'mother_tagnumber',
      mother != '' ? `${id}${valueMS}${mother}` : '',
    );
    formData.append('father_supporttag', father != '' ? father : '');
    formData.append(
      'father_tagnumber',
      father != '' ? `${id}${valueMS}${father}` : '',
    );
    formData.append('breed', Breed);
    formData.append(
      'weight',
      unit == true ? weight : Math.round(weight / 0.45359237),
    );
    formData.append(
      'weight_kg',
      unit == false ? weight : Math.round(weight * 0.45359237),
    );
    formData.append(
      'weight_30',
      unit == true ? weight30 : Math.round(weight30 / 0.45359237),
    );
    formData.append(
      'weight_30_kg',
      unit == false ? weight30 : Math.round(weight30 * 0.45359237),
    );
    formData.append(
      'weight_60',
      unit == true ? weight60 : Math.round(weight60 / 0.45359237),
    );
    formData.append(
      'weight_60_kg',
      unit == false ? weight60 : Math.round(weight60 * 0.45359237),
    );
    formData.append(
      'weight_90',
      unit == true ? weight90 : Math.round(weight90 / 0.45359237),
    );
    formData.append(
      'weight_90_kg',
      unit == false ? weight90 : Math.round(weight90 * 0.45359237),
    );
    formData.append('bred', bred == "Yes" ? true : false);
    formData.append('age', age);
    formData.append('vaccinated', vaccinated == "Yes" ? true : false);
    if (vaccinated == "Yes") {
      formData.append('vaccination_date', vaccinateddate);
    }

    formData.append('price', price);
    formData.append('bought', bought == "Yes" ? true : false);
    formData.append('status', 'Alive');
    formData.append('animal_image', profile_pic.length == 0 ? [] : profile_pic[0]['file']);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    };
    if (isEnableSignIn()) {
      axios.post(baseURL + '/animals/', formData, config)
        .then(response => {
          if (response.status == 201) {
            setLoading(false);
            dispatch(getHerds())
            dispatch(getTags())
            dispatch(getOverview())
            alert.success(<AlertCard msg={"Animal Added Sucessfully"} type={true} />)
          }
          else {
            alert.error(<AlertCard msg={"Internal server error"} type={false} />)
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err)
          setLoading(false);
          alert.error(<AlertCard msg={err.message || String(err)} type={false} />)
        });
    } else {
      alert.error(<AlertCard msg={"Invalid Input"} type={false} />)
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <HeaderBar navigate={navigate} />

      <div className="max-w-4xl mx-auto p-6 pb-32">

        {/* Section 1: Essential Info */}
        <div className="bg-gray-100 rounded-xl p-6 mb-6">
          <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">ESSENTIAL INFO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput
              label="Tag Number*"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              icon={IMAGES.tag}
              placeholder="Enter tag #"
            />
            <FormInput
              label="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={IMAGES.name}
              placeholder="Animal name"
            />
            <FormSelect
              label="Species*"
              value={valueMS}
              onChange={(item) => setValueMS(item.label)}
              options={species}
              placeholder="Select Species"
            />

            <FormSelect
              label="Gender*"
              value={valueBST}
              onChange={(item) => {
                setValueBST(item.label);
                setValueBS(item.type);
              }}
              options={finder(gender, valueMS)}
              placeholder="Select Gender"
            />

            <FormSelect
              label="Purchased*"
              value={bought}
              onChange={(item) => setBought(item.label)}
              options={checking}
              placeholder="Select Option"
            />
          </div>
        </div>

        {/* Section 2: Detailed Info */}
        <div className="bg-gray-100 rounded-xl p-6 mb-6">
          <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">DETAILED INFO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* DOB */}
            <FormInput
              label="Date of Birth"
              type="date"
              value={dobt}
              onChange={(e) => setDobt(moment(e.target.value).format("YYYY-MM-DD"))}
            />

            {/* Weight */}
            <FormInput
              label={`Weight (${unit ? 'lbs' : 'kg'})`}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              icon={IMAGES.scale}
            />

            {/* Mother's Tag */}
            <FormInput
              label="Mother's Tag"
              value={mother}
              onChange={(e) => setMother(e.target.value)}
              icon={IMAGES.tag}
              placeholder="Mother's ID"
            />

            {/* 30/60/90 Days Weights */}
            <FormInput
              label="30 Days Weight"
              type="number"
              value={weight30}
              onChange={(e) => setWeight30(e.target.value)}
              icon={IMAGES.scale}
            />
            <FormInput
              label="60 Days Weight"
              type="number"
              value={weight60}
              onChange={(e) => setWeight60(e.target.value)}
              icon={IMAGES.scale}
            />
            <FormInput
              label="90 Days Weight"
              type="number"
              value={weight90}
              onChange={(e) => setWeight90(e.target.value)}
              icon={IMAGES.scale}
            />

            {/* Father's Tag */}
            <FormInput
              label="Father's Tag"
              value={father}
              onChange={(e) => setFather(e.target.value)}
              icon={IMAGES.tag}
              placeholder="Father's ID"
            />

            {/* Vaccinated */}
            <FormSelect
              label="Vaccinated"
              value={vaccinated}
              onChange={(item) => setVaccinated(item.label)}
              options={checking}
              placeholder="Select Status"
            />

            {/* Conditional: Vaccination Date */}
            {vaccinated === "Yes" && (
              <FormInput
                label="Vaccination Date"
                type="date"
                value={vaccinateddate}
                onChange={(e) => setVaccinateddate(moment(e.target.value).format("YYYY-MM-DD"))}
              />
            )}

            {/* Breed */}
            <FormInput
              label="Breed"
              value={Breed}
              onChange={(e) => setBreed(e.target.value)}
              icon={IMAGES.dog}
              placeholder="Breed type"
            />

            {/* Registration */}
            <FormInput
              label="# Registration"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              icon={IMAGES.name} // Using generic icon or create specific if found
              placeholder="Reg number"
            />
          </div>
        </div>

        {/* Purchase Info (Conditional) */}
        {bought === "Yes" && (
          <div className="bg-gray-100 rounded-xl p-6 mb-6">
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">PURCHASE INFO</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                icon={IMAGES.money}
              />
              <FormInput
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                icon={IMAGES.age}
              />
              <FormSelect
                label="Bred"
                value={bred}
                onChange={(item) => setBred(item.label)}
                options={checking}
                placeholder="Select Status"
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center space-x-6 mt-8">
          {loading ? <Loading /> : (
            <button
              onClick={postAnimal}
              className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center transition-all transform hover:-translate-y-1"
            >
              <PlusIcon /> Add Animal
            </button>
          )}
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 font-bold hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>

        {/* Image Upload Widget - Moved to bottom or less intrusive location as per design focus */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">ANIMAL IMAGES</h3>
          <ImageUploading
            value={profile_pic}
            onChange={onChange}
            maxNumber={69}
            resolutionWidth={300}
            resolutionHeight={300}
          >
            {({ imageList, onImageUpload, onImageRemoveAll }) => (
              <div className="flex flex-wrap items-center gap-4">
                {imageList.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={image["dataURL"]} alt="" className="w-24 h-24 rounded-lg object-cover shadow-sm" />
                  </div>
                ))}
                <button
                  onClick={onImageUpload}
                  className="w-24 h-24 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors border-2 border-dashed border-gray-300"
                >
                  <span className="text-2xl font-bold">+</span>
                  <span className="text-xs">Upload</span>
                </button>
                {imageList.length > 0 && (
                  <button onClick={onImageRemoveAll} className="text-red-500 text-sm font-bold">Remove All</button>
                )}
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </div>
  )
}
