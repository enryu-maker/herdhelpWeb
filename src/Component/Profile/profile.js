import React, { useState } from 'react'
import NavBarMain from '../Nav/navmain'
import Sidenav from '../Nav/sidenav'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme' // Kept for safe measure
import { useDispatch, useSelector } from 'react-redux'
import { IMAGES } from '../../Theme/Image'
import { UserData } from '../../Store/actions'
import Modal from 'react-modal';
import useMediaQuery from '../useMediaQuery'
import { useNavigate } from 'react-router-dom'; // Assuming we might need navigation, though not strictly used in original

// Icons
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

export default function Profile() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(UserData())
  }, [])

  // State
  const [active, setActive] = React.useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const user = useSelector(state => state.Reducers.userData)

  // Form State (initially populated from user data)
  // Note: Original code used user object directly in inputs which is usually immutable Redux state.
  // We should create local state for editing.
  const [editForm, setEditForm] = React.useState({
    fullname: '',
    phone: '',
    farm_name: '',
    address: ''
  });

  // Load user data into edit form when modal opens
  React.useEffect(() => {
    if (user) {
      setEditForm({
        fullname: user.fullname || '',
        phone: user.phone || '',
        farm_name: user.farm_name || '',
        address: user.address || ''
      })
    }
  }, [user, modalIsOpen])


  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // legacy support
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Helper row component
  const ProfileRow = ({ label, value, isLast }) => (
    <div className={`flex justify-between items-center py-4 ${!isLast ? 'border-b border-gray-100' : ''}`}>
      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider w-1/3">{label}</span>
      <span className="text-gray-900 font-medium text-right w-2/3 break-words">{value || "-"}</span>
    </div>
  );

  return (
    <div className="flex w-full h-screen bg-white">
      {/* Sidebar - Desktop Only */}
      <Sidenav active="Profile" />

      <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden transition-all duration-300 ml-0 lg:ml-[250px] pt-16 lg:pt-0">
        {/* Navbar - Mobile/Tablet */}
        <div className="md:hidden">
          <NavBarMain />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">

          {/* Header */}
          <div className="bg-slate-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center max-w-5xl mx-auto w-full">
            <h1 className="text-3xl font-bold text-gray-900">Profile Section</h1>
            <button
              onClick={openModal}
              className="bg-[#009A48] hover:bg-[#007f3b] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md flex items-center transition-transform transform hover:-translate-y-0.5"
            >
              <EditIcon /> EDIT
            </button>
          </div>

          <div className="max-w-4xl mx-auto px-6 pb-20">

            {/* Profile Image - Centered */}
            <div className="flex justify-center mb-10 relative">
              <div className="relative p-1 bg-white rounded-full shadow-lg">
                <img
                  src={user?.profile_picture || `https://ui-avatars.com/api/?name=${user?.username || 'User'}`}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-slate-50"
                />
              </div>
            </div>

            {/* Personal Info Card */}
            <div className="bg-[#F3F4F6] rounded-xl p-8 mb-8 shadow-sm"> {/* Changed to Gray bg as per design which looks like light gray container */}
              <ProfileRow label="FULL NAME" value={user.fullname} />
              <ProfileRow label="USERNAME" value={user.username} />
              <ProfileRow label="PHONE NUMBER" value={user.phone} />
              <ProfileRow label="EMAIL" value={user.email} isLast />
            </div>

            {/* Farm Info Card */}
            <div className="bg-[#F3F4F6] rounded-xl p-8 mb-8 shadow-sm">
              <ProfileRow label="FARM NAME" value={user.farm_name} />
              <ProfileRow label="ADDRESS" value={user.address} isLast />
            </div>

          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // White overlay per design/original? Or dark? Original had light.
            zIndex: 50,
            display: 'flex',
            justifyContent: 'center', // Grid center substitute
            alignItems: 'center'
          },
          content: {
            position: 'relative',
            inset: 'auto',
            width: mobile ? '500px' : '90%',
            padding: 0,
            border: 'none',
            background: 'transparent',
            outline: 'none',
          }
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
            <button
              onClick={closeModal}
              className="p-1 rounded-full bg-[#009A48] text-white hover:bg-[#007f3b]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-gray-800">Edit Account</h2>
            <div className="w-8"></div>
          </div>

          {/* Modal Content - Gray Form */}
          <div className="p-6">
            <div className="bg-[#F3F4F6] rounded-xl p-6 space-y-6">

              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">FULL NAME</label>
                <div className="relative group w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    value={editForm.fullname}
                    onChange={(e) => setEditForm({ ...editForm, fullname: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">PHONE NUMBER</label>
                <div className="relative group w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                    <PhoneIcon />
                  </div>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Farm Name */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">FARM NAME</label>
                <div className="relative group w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                    <HomeIcon />
                  </div>
                  <input
                    type="text"
                    value={editForm.farm_name}
                    onChange={(e) => setEditForm({ ...editForm, farm_name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">ADDRESS</label>
                <div className="relative group w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                    <LocationIcon />
                  </div>
                  <input
                    type="text"
                    value={editForm.address}
                    onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={closeModal} // Placeholder for save logic since original didn't implement it either?
                // Checked original: <TextButton icon={IMAGES.update} label={"Save"} onPress={closeModal}/>
                // It indeed just closed the modal. I will preserve that behavior.
                className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all transform hover:-translate-y-1 mt-4"
              >
                SAVE
              </button>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}