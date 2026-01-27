import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import AnimalCard from './AnimalCard';
import { IMAGES } from '../../Theme/Image';
// import useMediaQuery from '../../Component/useMediaQuery';

// Icons as basic SVGs or images (using existing IMAGES for now where applicable) or Heroicons
const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#009A48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function Animal() {
  let navigate = useNavigate()
  const { state } = useLocation();
  const { data } = state;

  // Restore original state variables to match logic requirements exactly
  const [search, setSearch] = React.useState(false)
  const [searched, setSearched] = React.useState('')
  const [sep, setSpec] = React.useState('')
  const [vacc, setVacc] = React.useState('')
  const [med, setMed] = React.useState('')
  const [Bred, setBred] = React.useState('')
  const [animal, setAnimal] = React.useState('')

  // Restore EXACT original deductive logic
  function removeDuplicates(arr) {
    // console.log(arr)
    let jsonObject = arr.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    return uniqueArray
  }

  // Restore EXACT original filter logic
  function filterList(list) {
    return removeDuplicates(list).filter(
      (listItem) =>
        (listItem.tag_number
          .toString()
          .toLowerCase()
          .includes(searched.toString().toLowerCase()) ||
          listItem.name.toString().toLowerCase().includes(searched.toString().toLowerCase()) ||
          listItem.weight.toString().includes(searched.toString().toLowerCase()) ||
          listItem.gender.toString().toLowerCase().includes(searched.toString().toLowerCase()))
        &&
        (listItem.species
          .toString()
          .includes(sep.toString()) &&
          (listItem.vaccinated
            .toString()
            .includes(vacc.toString()) &&
            listItem.medicated
              .toString()
              .includes(med.toString())
          ) &&
          listItem.bred
            .toString()
            .includes(Bred.toString())
        )
    );
  }

  const filteredData = filterList(data.data);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Left: Back + Title + Badge */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
            >
              <BackIcon />
            </button>
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">
                {data.label !== "Sheep" ? `My ${data.label}s` : `My ${data.label}`}
              </h1>
              <span className="bg-[#009A48] text-white text-xs font-bold px-3 py-1 rounded-full">
                {data.data.length}
              </span>
            </div>
          </div>

          {/* Right: Search Only (Add Button Removed) */}
          <div className="flex items-center space-x-4 flex-1 md:flex-none justify-end">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search by ID or Name..."
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <AnimalCard
              key={item.id}
              data={item}
              onPress={() => {
                navigate("/info", {
                  state: { data: item }
                })
              }}
            />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <p className="text-lg">No animals found matching "{searched}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
