import React, { useState } from 'react'
import { COLORS } from '../../Theme/Theme' // Keeping provided theme colors available if needed, though using Tailwind mostly
import { useSelector, useDispatch } from 'react-redux';
import axiosIns from '../../helpers/helpers'
import { getFinance } from '../../Store/actions'
import useMediaQuery from '../../Component/useMediaQuery'
import { useAlert } from 'react-alert'

// Icons
const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const MoneyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

export default function AddFinance() {
  const [cat, setCat] = React.useState(1); // Unused in original but preserved
  const [Qty, setQty] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [valueMS, setValueMS] = useState("");
  const species = useSelector(state => state.Reducers.fcat)
  const token = useSelector(state => state.Reducers.authToken)
  const alert = useAlert()

  // Logic Preserved
  const data = JSON.stringify({
    price: price,
    category: valueMS,
    quantity: Qty,
  });
  const dispatch = useDispatch()

  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  async function postfinance() {
    // setLoading(true)
    if (price != "" && Qty != "") {
      await axiosIns
        .post('finance/', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(Response => {
          if (Response.status == 201) {
            dispatch(getFinance(token))
            alert.success("Finance Added Sucessfull")
            setQty('');
            setPrice('');
          } else {
            alert.error("Internal Server Error")
            console.log(Response.status)
            // setLoading(false)
          }
        })
        .catch(err => {
          alert.error(err)
          console.log(err)
        })
    }
    else {
      alert.error("Required Fields cannot be empty")
      console.log("Last div")
    }
  }

  return (
    <div className="w-full">
      {/* Gray Card Container */}
      <div className="bg-[#F3F4F6] rounded-xl p-6 shadow-sm">
        <h3 className="text-gray-900 text-lg font-bold mb-6">Add Finance</h3>

        <div className="space-y-6">
          {/* Category Select */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">CATEGORY*</label>
            <div className="relative">
              <select
                value={valueMS}
                onChange={(e) => setValueMS(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 appearance-none shadow-sm"
              >
                {/* Original Dropdown logic might have had a placeholder, assuming first option or empty */}
                <option value="">Select Category</option>
                {species?.map((a, index) => (
                  <option key={index} value={a.label || a.value}>{a.label || a.value}</option>
                  // Original used e.value in onPress, assuming species objects have label/value
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          {/* Quantity Input */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">QUANTITY</label>
            <div className="relative group w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                <TagIcon />
              </div>
              <input
                type="text"
                value={Qty}
                onChange={(e) => setQty(e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                placeholder="Enter Quantity"
              />
            </div>
          </div>

          {/* Price Input */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">PRICE</label>
            <div className="relative group w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
                <MoneyIcon />
              </div>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-9 py-2.5 transition-colors placeholder-gray-400"
                placeholder="Enter Price"
              />
            </div>
          </div>

          {/* Add Button */}
          <button
            onClick={() => {
              postfinance();
              // Preserving legacy behavior trying to modify parent DOM, wrapped in try-catch or safe check
              try {
                const el = document.getElementById('Addfinance');
                if (el) el.style.display = 'none';
              } catch (e) { }
            }}
            className="w-full bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all transform hover:-translate-y-1 mt-4"
          >
            <PlusIcon /> Add Finance
          </button>
        </div>
      </div>
    </div>
  )
}

