import React, { useState } from 'react'
import { COLORS, SIZES } from '../../Theme/Theme'
import { IMAGES } from '../../Theme/Image'
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../Component/Loading'
import useMediaQuery from '../../Component/useMediaQuery'
import { checking } from "../../Component/Constants";
import { useDispatch } from 'react-redux'
import Modal from 'react-modal';
import axiosIns from '../../helpers/helpers'
import { getMedical } from '../../Store/actions'
import { useAlert } from 'react-alert'
import moment from 'moment'

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

const MedicalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const DiseaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const PillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const DropperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18c2.67 0 4.012-3.231 2.122-5.121l-4-4 2.293-2.293a1 1 0 011.414 0l2 2a1 1 0 001.414 0l2-2a1 1 0 000-1.414l-2.293-2.293A1 1 0 007 2z" clipRule="evenodd" />
  </svg>
);

export default function History() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { data } = state || {}; // Safety check
  const [medicine, setmedicine] = useState("");
  const [medicationR, setmedicationR] = useState("");
  const [dosage, setdosage] = useState("");
  const [vaccinateddate, setVaccinateddate] = useState("");
  const [withdrawal_date, setwithdrawal_date] = useState(null);
  const [loading, setLoading] = useState(null);
  const [withdrawal, setwithdrawal] = useState(null);
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  // Modal Logic
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#000000c4'; // Removed legacy ref requirement
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch()
  const alert = useAlert()

  // Logic Preserved
  function addmedical() {
    setLoading(true)
    axiosIns.post('/medication/',
      {
        tag_number: data && data.length > 0 ? data[0].tag_number : null, // Added safety check
        medication_name: medicine,
        medication_date: vaccinateddate,
        dosage: dosage,
        disease: medicationR,
        withdrawal: withdrawal == "Yes" ? true : false,
        withdrawal_date: withdrawal_date != "" ? withdrawal_date : null
      }
    ).then(response => {
      if (response.status === 201) {
        if (data && data.length > 0) dispatch(getMedical(data[0].tag_number)) // Fixed accessing tag_number from data[0]
        setLoading(false)
        alert.success("Medication Added Successfully")
        closeModal();

        // Clear fields
        setmedicine("");
        setmedicationR("");
        setdosage("");
        setVaccinateddate("");
        setwithdrawal(null);
        setwithdrawal_date(null);
      } else {
        alert.error("Internal Server Error")
        setLoading(false)
      }
    })
      .catch(err => {
        console.log(err)
        alert.error("Internal Server Error")
        setLoading(false)
      });
  }

  // Header Component
  const HeaderBar = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-[#009A48] hover:bg-[#007f3b] transition-colors text-white shadow-md flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Medical History</h1>
        </div>

        <button
          onClick={openModal}
          className="flex items-center bg-[#009A48] hover:bg-[#007f3b] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors"
        >
          <PlusIcon /> Med
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <HeaderBar />

      <div className="flex-1 max-w-7xl mx-auto w-full p-6 pb-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#009A48] text-xs font-bold uppercase tracking-wider mb-1">PROBLEM</p>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.disease || "Unknown Issue"}
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-full">
                    <MedicalIcon />
                  </div>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">SOLUTION</p>
                  <p className="text-gray-900 font-semibold">
                    {item.medication_name || "N/A"}
                  </p>
                </div>

                {/* Dosage & Date */}
                <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-50">
                  <div>
                    <p className="text-[#009A48] text-xs font-bold uppercase tracking-wider mb-1">DOSAGE</p>
                    <p className="text-[#009A48] font-bold text-lg">
                      {item.dosage || "-"}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">
                    {item.medication_date}
                  </p>
                </div>

                {/* Withdrawal Info if present */}
                {item.withdrawal && (
                  <div className="mt-4 bg-red-50 p-3 rounded-lg">
                    <p className="text-red-800 text-xs font-bold">
                      Withdrawal Date: {item.withdrawal_date}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            // Added better empty state
            <div className="col-span-full flex flex-col items-center justify-center p-12 text-gray-400 bg-white rounded-xl border border-dashed border-gray-300">
              <MedicalIcon />
              <p className="mt-2 text-sm font-medium">No medical history records found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Revamped Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
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
            width: mobile ? (matches ? '450px' : '450px') : '90%', // Slightly wider
            maxWidth: '500px',
            maxHeight: '90vh',
            padding: 0,
            border: 'none',
            background: 'transparent',
            borderRadius: SIZES.radius,
            outline: 'none',
          }
        }}
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <h2 className="text-gray-900 font-bold text-xl">Add Medication</h2>
            <button
              onClick={closeModal}
              className="p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content - Gray Card Style */}
          <div className="p-6 bg-white"> {/* Outer is white, form is gray card */}
            <div className="bg-[#F3F4F6] rounded-xl p-6">

              <div className="space-y-6">
                {/* Reason */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">REASON / DISEASE</label>
                  <div className="relative group w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                      <DiseaseIcon />
                    </div>
                    <input
                      type="text"
                      value={medicationR}
                      onChange={(e) => setmedicationR(e.target.value)}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                      placeholder="Enter reason..."
                    />
                  </div>
                </div>

                {/* Medicine Name */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">MEDICINE NAME</label>
                  <div className="relative group w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                      <PillIcon />
                    </div>
                    <input
                      type="text"
                      value={medicine}
                      onChange={(e) => setmedicine(e.target.value)}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                      placeholder="Enter medicine name..."
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">MEDICATION DATE</label>
                  <div className="relative group w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                      <CalendarIcon />
                    </div>
                    <input
                      type="date"
                      value={vaccinateddate}
                      onChange={(e) => setVaccinateddate(moment(e.target.value).format("YYYY-MM-DD"))}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Dosage */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">DOSAGE</label>
                  <div className="relative group w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                      <DropperIcon />
                    </div>
                    <input
                      type="text"
                      value={dosage}
                      onChange={(e) => setdosage(e.target.value)}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                      placeholder="e.g. 5ml"
                    />
                  </div>
                </div>

                {/* Withdrawal Select */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">WITHDRAWAL PERIOD?</label>
                  <div className="relative">
                    <select
                      value={withdrawal || ""}
                      onChange={(e) => setwithdrawal(e.target.value)}
                      className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 appearance-none shadow-sm"
                    >
                      <option value="" disabled>Select Option</option>
                      {checking.map((opt, idx) => (
                        <option key={idx} value={opt.value || opt.label}>{opt.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Conditional Withdrawal Date */}
                {withdrawal === "Yes" && (
                  <div className="flex flex-col animate-fadeIn">
                    <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">WITHDRAWAL DATE</label>
                    <div className="relative group w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                        <CalendarIcon />
                      </div>
                      <input
                        type="date"
                        value={withdrawal_date}
                        onChange={(e) => setwithdrawal_date(e.target.value)}
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Submit Button */}
              <div className="mt-8">
                {loading ? (
                  <div className="flex justify-center p-4">
                    <Loading />
                  </div>
                ) : (
                  <button
                    onClick={addmedical}
                    className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all transform hover:-translate-y-1"
                  >
                    <PlusIcon /> Add Medication
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
