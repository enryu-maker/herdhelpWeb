import React, { useState } from 'react'
import { COLORS, FONTS, formatter, SIZES } from '../../Theme/Theme'
import { useNavigate, useLocation } from 'react-router-dom';
import { baseURL } from '../../helpers/helpers';
import { IMAGES } from '../../Theme/Image';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimal, getMedical } from '../../Store/actions';
import ImageUploading from 'react-images-uploading';
import AlertCard from '../../Component/AlertCard';
import axios from 'axios';
import { useAlert } from 'react-alert';
import Loading from '../../Component/Loading';
import useMediaQuery from '../../Component/useMediaQuery';
import { checking, Statusad } from "../../Component/Constants";
import DropDown from '../../Component/DropDown/DropDown';
import InputForm from '../../Component/InputForm';
import axiosIns from '../../helpers/helpers';
import Modal from 'react-modal';
// import TextButton from '../../Component/TextButton'; // Unused in new design maybe?

// Icons
const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009A48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

const StatusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
  </svg>
);

// Helper Component for Info Rows
const InfoRow = ({ label, value, isLast }) => (
  <div className={`flex justify-between items-center py-3 ${!isLast ? 'border-b border-gray-100' : ''}`}>
    <span className="text-gray-500 font-medium text-sm">{label}</span>
    <span className="text-gray-900 font-bold text-sm text-right">{value || '-'}</span>
  </div>
);

// Helper for Section Headers
const SectionHeader = ({ icon, title, colorClass = "text-green-600" }) => (
  <div className="flex items-center mb-4">
    {/* Render icon if passed, or generic icon */}
    <span className={`mr-2 ${colorClass}`}>
      {icon || (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )}
    </span>
    <h3 className={`font-bold uppercase tracking-wider text-sm ${colorClass}`}>{title}</h3>
  </div>
);

export default function Info() {
  let navigate = useNavigate()
  const { state } = useLocation();
  const { data, cond, Label } = state;
  // console.log(Label)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getAnimal(data.tag_number))
    dispatch(getMedical(data.tag_number))
  }, [])
  const alert = useAlert()
  const med = useSelector(state => state.Reducers.med)
  const animal = useSelector(state => state.Reducers.animal)
  const token = useSelector(state => state.Reducers.authToken)
  const unit = useSelector(state => state.Reducers.unit)
  const [profile_pic, setprofile_pic] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [valueS, setValueS] = useState("");
  const [valueF, setValueF] = useState("");
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  // Modal Logic
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() { setIsOpen(true); }
  function afterOpenModal() { /* references are now sync'd */ }
  function closeModal() { setIsOpen(false); }

  const onChange = (imageList) => {
    setprofile_pic(imageList);
  };

  const updateProfile = () => {
    setLoading(true)
    const formData = new FormData();
    formData.append('animal_image', profile_pic.length === 0 ? [] : profile_pic[0]['file']);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data",
      },
    };
    axios.patch(baseURL + `/animals/${animal?.tag_number}`, formData, config)
      .then(response => {
        if (response.status == 200) {
          setLoading(false);
          dispatch(getAnimal(data.tag_number))
          alert.success(<AlertCard msg={"Profile Pic Sucessfully"} type={true} />)
        }
        else {
          alert.error(<AlertCard msg={"Internal server error"} type={false} />)
          setLoading(false);
        }
      })
      .catch(err => {
        setLoading(false);
        alert.error(<AlertCard msg={err} type={false} />)
      });
  }

  async function findChildren() {
    setLoading(true);
    try {
      let { data } = await axiosIns.get(
        `babiesbydate/${animal.tag_number}`,
      );
      if (data) {
        setLoading(false);
        navigate('/parentop', {
          state: {
            data: data
          }
        })
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }

  // New Header Component
  const HeaderBar = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
          >
            <BackIcon />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Animal Info</h1>
        </div>

        {cond !== false && (
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/edit")}
              className="flex items-center text-[#009A48] font-bold text-sm hover:text-green-700 transition-colors"
            >
              <EditIcon /> EDIT
            </button>
            <button
              onClick={openModal}
              className="flex items-center bg-[#009A48] hover:bg-[#007f3b] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors"
            >
              <StatusIcon /> STATUS
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <HeaderBar />

      <div className="flex-1 max-w-7xl mx-auto w-full p-6 pb-24">

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-[#009A48] p-1 bg-white shadow-md overflow-hidden">
              {cond ? (
                <img
                  src={profile_pic.length === 0 ? (animal?.animal_image != null ? animal?.animal_image : animal?.image) : profile_pic[0]['dataURL']}
                  alt={animal?.tag_number}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  src={profile_pic.length === 0 ? (animal?.animal_image != null ? baseURL + animal?.animal_image : baseURL + animal?.image) : profile_pic[0]['dataURL']}
                  alt={animal?.tag_number}
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            {/* Image Upload Trigger - Keeping logic simple/hidden or integrated */}
            <div className="absolute -bottom-2 md:bottom-0 left-1/2 transform -translate-x-1/2">
              <ImageUploading
                value={profile_pic}
                onChange={onChange}
                maxNumber={1}
                resolutionWidth={300}
                resolutionHeight={300}
              >
                {({ onImageUpload, onImageRemoveAll }) => (
                  <div className="flex flex-col items-center">
                    {loading ? <Loading /> : (
                      <>
                        {profile_pic.length === 0 ? (
                          <button
                            onClick={onImageUpload}
                            className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm hover:bg-yellow-500"
                          >
                            EDIT
                          </button>
                        ) : (
                          <div className="flex space-x-1 mt-1">
                            <button onClick={updateProfile} className="bg-[#009A48] text-white text-xs px-2 py-1 rounded">Save</button>
                            <button onClick={onImageRemoveAll} className="bg-red-500 text-white text-xs px-2 py-1 rounded">X</button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-4">{animal?.name || "No Name"}</h2>
          <p className="text-gray-500 text-sm">Tag: #{animal?.tag_number}</p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Column 1: General Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <SectionHeader title="GENERAL INFO" icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            } />
            <div className="space-y-1">
              <InfoRow label="Name" value={animal?.name} />
              <InfoRow label="Gender" value={animal?.gender_name} />
              {animal?.gender === "Female" && <InfoRow label="Bred" value={animal?.bred ? "Yes" : "No"} />}
              <InfoRow label="Tag Number" value={animal?.support_tag} />
              <InfoRow label="Weight" value={unit ? `${animal?.weight} Lbs` : `${animal?.weight_kg} Kg`} isLast />
            </div>
          </div>

          {/* Column 2: Breeding & Birth */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <SectionHeader title="BREEDING & BIRTH" colorClass="text-green-600" icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            } />

            {animal?.bought ? (
              <div className="space-y-1">
                <InfoRow label="Type" value="Purchased" />
                <InfoRow label="Price" value={formatter.format(animal?.price)} />
                {Label === "Sold Animals" && <InfoRow label="Sold Price" value={formatter.format(animal?.soldprice)} isLast />}
              </div>
            ) : (
              <div className="space-y-1">
                <InfoRow label="Type" value="Birth" />
                {/* Weights Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-b border-gray-100 text-center">
                  <div><p className="text-secondary text-xs uppercase">30 Day</p><p className="font-bold">{animal?.weight_30 || '-'}</p></div>
                  <div><p className="text-secondary text-xs uppercase">60 Day</p><p className="font-bold">{animal?.weight_60 || '-'}</p></div>
                  <div><p className="text-secondary text-xs uppercase">90 Day</p><p className="font-bold">{animal?.weight_90 || '-'}</p></div>
                </div>
                <InfoRow label="Date of Birth" value={animal?.birth_date} />
                <InfoRow label="Mother's Tag" value={animal?.mother_supporttag} />
                <InfoRow label="Father's Tag" value={animal?.father_supporttag} />
                {Label === "Sold Animals" && <InfoRow label="Sold Price" value={formatter.format(animal?.soldprice)} isLast />}
              </div>
            )}
          </div>

          {/* Column 3: Registration & Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
              <SectionHeader title="REGISTRATION" colorClass="text-green-600" icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } />
              <div className="space-y-1">
                <InfoRow label="Registration" value={animal?.registration} />
                <InfoRow label="Breed" value={animal?.breed} />
                <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-500 font-medium text-sm">Vaccinated?</span>
                  <div className="flex items-center">
                    {animal?.vaccinated ? (
                      <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded mr-2">YES</span>
                    ) : (
                      <span className="text-xs font-bold text-white bg-red-400 px-2 py-0.5 rounded mr-2">NO</span>
                    )}
                    {animal?.vaccinated && <span className="text-gray-900 font-bold text-sm">{animal?.vaccination_date}</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Flag Alert */}
            {data.flagged && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r shadow-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Flagged: {data.flag_desc}</h3>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => navigate("/medhistory", { state: { data: med } })}
                className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white rounded-xl py-4 px-6 flex items-center justify-between shadow-md transition-all"
              >
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">Medical History</span>
                </div>
                <span className="bg-white text-[#009A48] font-bold h-8 w-8 flex items-center justify-center rounded-full">
                  {med?.length || 0}
                </span>
              </button>

              <button
                onClick={findChildren}
                className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white rounded-xl py-4 px-6 flex items-center justify-between shadow-md transition-all"
              >
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">Babies</span>
                </div>
                <span className="bg-white text-[#009A48] font-bold h-8 w-8 flex items-center justify-center rounded-full">
                  {animal.children?.length || 0}
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* MODAL - Preserving Logic but styling container */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            },
            content: {
              position: 'relative',
              inset: 'auto',
              width: mobile ? (matches ? '400px' : '400px') : '90%',
              maxHeight: '90vh',
              padding: 0,
              border: 'none',
              background: 'transparent',
              background: COLORS.lightGray2, // original style
              borderRadius: SIZES.radius,
              outline: 'none',
            }
          }}
          ariaHideApp={false}
        >
          <div style={{
            background: COLORS.lightGray2,
            borderRadius: SIZES.radius,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Close Button */}
            <div className="flex justify-center mb-4 relative">
              <div
                onClick={closeModal}
                className="absolute right-0 top-0 cursor-pointer bg-white p-2 rounded-full shadow-sm"
              >
                <img src={IMAGES.close2} alt="close" className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-[#009A48]">Status</h2>
            </div>

            {/* Dropdowns and Inputs */}
            <div className="space-y-4">
              <DropDown
                value={valueS}
                onPress={(y) => setValueS(y.label)}
                label={"Status* "}
                options={Statusad}
              />
              <DropDown
                value={valueF}
                onPress={(x) => setValueF(x.label)}
                label={"Flagged* "}
                options={checking}
              />
              <InputForm
                prependComponent={
                  <img src={IMAGES.plus1} style={{ height: 25, width: 25, margin: 10 }} />
                }
                type="text"
                value={'Fence Problem'}
                label={"Description"}
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
