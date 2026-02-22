import React, { useState } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useDispatch, useSelector } from 'react-redux';
import { getHerds, getTags } from '../../Store/actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosIns from '../../helpers/helpers';
import { useAlert } from 'react-alert';
import useMediaQuery from '../../Component/useMediaQuery';

// Icons
const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 4.4A1 1 0 0116 14H6a1 1 0 110-2h12l-2-2.5 2-2.5H6a1 1 0 01-1-1V5z" clipRule="evenodd" />
    <path d="M5 5a1 1 0 00-1 1v8a1 1 0 002 0V6a1 1 0 00-1-1z" />
  </svg>
);

// React Select Custom Styles
const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? '#009A48' : 'white',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '2px',
    boxShadow: state.isFocused ? '0 0 0 1px #009A48' : null,
    borderWidth: '0px', // Removed border to match "Clean White Box" look inside gray container? Or keep border? screenshot shows boxes.
    // Actually, simple white boxes usually have no border or a very subtle one.
    // I'll add a subtle shadow or border.
    border: '1px solid #E5E7EB',
    '&:hover': {
      borderColor: '#009A48'
    }
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#009A48' : state.isFocused ? '#E8F5E9' : null,
    color: state.isSelected ? 'white' : 'black',
  })
};

export default function Updatebred() { // Function name preserved from original file
  const animatedComponents = makeAnimated();
  const [valueMS, setValueMS] = useState("");
  const [loading, setLoading] = useState(false);

  const [tag, setTag] = useState([]);
  const navigate = useNavigate()
  const [dobt, setDobt] = useState(null); // preserved state name
  const alert = useAlert()
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTags())
  }, [])

  const tags = useSelector(state => state.Reducers.tags)
  const species = useSelector(state => state.Reducers.cat)
  const id = localStorage.getItem("id")
  const matches = useMediaQuery('(min-width:820px)')

  function finder(list, value) {
    var dataValue;
    list?.map(a => {
      if (value == a.label) {
        dataValue = a.data;
      }
    });
    return dataValue;
  }

  function axiosRequest(tag) {
    var ls = []
    tag.map((a, index) => {
      const v = `animals/${id}${valueMS}${a.value}`
      ls.push(v)
    })
    return (ls)
  }

  // Logic preserved
  async function updateBred() {
    var final_list = axiosRequest(tag)
    if (tag != "" && dobt != '') { // Preserved validation logic (fixed comma to &&)
      setLoading(true)
      try {
        await Promise.all(final_list.map((endpoint) => axiosIns.patch(endpoint, {
          'flagged': true,
          'flag_desc': dobt
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }))).then(axios.spread((Response) => {
          if (Response.status == 200) {
            alert.success("Flag Updated Sucessfully")
            dispatch(getHerds())
            setLoading(false)
          }
          else {
            alert.error(Response.status)
            setLoading(false)
          }
        }))
      } catch (err) {
        alert.error(err.data || "Error Occurred")
        setLoading(false)
      }
    }
    else {
      alert.error("Invalid Inputs")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      {/* Header */}
      <div className="flex items-center space-x-4 mx-auto bg-white border-b border-gray-200 px-6 py-6 mb-6 sticky top-0 z-30 ">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-[#009A48] hover:bg-[#007f3b] transition-colors shadow-md flex items-center justify-center text-white"
        >
          <BackIcon />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Update Flag</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Gray Container for Form */}
        <div className="bg-[#F3F4F6] rounded-xl p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Species Select */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">SPECIES*</label>
              <div className="relative">
                <select
                  value={valueMS}
                  onChange={(e) => setValueMS(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#009A48] focus:border-[#009A48] block p-3 pr-8 appearance-none shadow-sm"
                >
                  <option value="">Select Species</option>
                  {species?.map((a, index) => (
                    <option key={index} value={a.label}>{a.label}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            {/* Tags Select */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">TAGS</label>
              <Select
                components={animatedComponents}
                isMulti
                name="Tags"
                options={finder(tags, valueMS)}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => setTag(e)}
                placeholder="Select..."
                styles={customSelectStyles}
              />
            </div>

            {/* Flag Desc Input */}
            <div className="flex flex-col h-full justify-start pt-1">
              <label className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">FLAG DESC*</label>
              <div className="relative group w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <FlagIcon />
                </div>
                <input
                  type="text"
                  value={dobt || ''}
                  onChange={(e) => setDobt(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 text-md focus:ring-0 focus:border-[#009A48] block pl-8 py-2.5 transition-colors placeholder-gray-400"
                  placeholder="Enter description..."
                />
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={updateBred}
          className="bg-[#009A48] hover:bg-[#007f3b] text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transition-all transform hover:-translate-y-1"
        >
          {loading ? 'Updating...' : <><RefreshIcon /> Update Flag</>}
        </button>

      </div>
    </div>
  )
}

