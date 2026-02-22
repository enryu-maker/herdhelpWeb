import React from 'react'
import { Link } from 'react-router-dom'
import NavBarMain from '../../Component/Nav/navmain'
import { IMAGES } from '../../Theme/Image'
import Sidenav from '../../Component/Nav/sidenav'
import { useDispatch } from 'react-redux'
import { getSpecies, getTags } from '../../Store/actions'
import useMediaQuery from '../../Component/useMediaQuery'

export default function Add() {
  const data = [
    {
      'id': 1,
      'label': 'Add Animals',
      'image': IMAGES.addAnimal,
      'nav': '/animals'
    },
    {
      'id': 2,
      'label': 'Add Medication',
      'image': IMAGES.med,
      'nav': '/medication',
      'cond': true,
    },
    {
      'id': 3,
      'label': 'Update Weight',
      'image': IMAGES.gain,
      'nav': '/weight'
    },
    {
      'id': 4,
      'label': 'Update Bred',
      'image': IMAGES.bred,
      'nav': '/Bred'
    },
    {
      'id': 5,
      'label': 'Flag Animal',
      'image': IMAGES.flag,
      'nav': '/Flag'
    },
  ]
  const dispatch = useDispatch()
  const matches = useMediaQuery('(max-width:820px)')

  React.useEffect(() => {
    dispatch(getSpecies())
    dispatch(getTags())
  }, [])

  // Action Card Component
  const ActionCard = ({ label, image, path }) => (
    <Link to={path} className="block">
      <div className="w-48 h-48 bg-gray-50 hover:bg-white border border-gray-100 rounded-3xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="relative mb-4">
          {/* Main Icon */}
          <img src={image} alt={label} className="w-12 h-12 object-contain opacity-80" />

          {/* Green Plus Badge */}
          <div className="absolute -bottom-1 -right-1 bg-[#009A48] text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <p className="text-gray-900 font-bold text-center text-sm px-2 leading-tight">
          {label}
        </p>
      </div>
    </Link>
  );


  const MainContent = () => (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
          {data.map((item) => (
            <ActionCard
              key={item.id}
              label={item.label}
              image={item.image}
              path={item.nav}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Sidebar */}
      <Sidenav />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden lg:ml-64 pt-16 lg:pt-0">
        <NavBarMain page={'add'} />

        <div className="flex-1 overflow-y-auto bg-white">
          <MainContent />
        </div>
      </div>
    </div>
  )
}


