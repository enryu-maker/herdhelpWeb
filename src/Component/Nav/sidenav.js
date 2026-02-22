import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../../Theme/Image'
import { useDispatch, useSelector } from "react-redux";
import { getSpecies, getTags, UserData } from '../../Store/actions'
import Modal from 'react-modal';

export default function Sidenav({
  active
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getSpecies(), getTags(), UserData())
  }, [])
  const user = useSelector(state => state.Reducers.userData)

  // Reusable Side Menu Item Component
  function Sidemenu({ img, label, path, onPress }) {
    const isActive = active === label;
    return (
      <Link to={path} onClick={onPress} className="w-full no-underline block mb-2">
        <div className={`
          flex items-center px-6 py-3 cursor-pointer transition-colors duration-200
          ${isActive ? 'bg-white/20 border-r-4 border-white' : 'hover:bg-white/10'}
        `}>
          <img
            src={img}
            alt="icon"
            className="w-6 h-6 object-contain mr-4 brightness-0 invert" // Make icons white
          />
          <span className={`text-white font-medium text-base`}>
            {label}
          </span>
        </div>
      </Link>
    )
  }

  // Sidebar Content Logic
  const SidebarContent = ({ isMobile }) => (
    <div className="flex flex-col h-full bg-[#009A48]">
      {/* Close button for mobile modal */}
      {isMobile && (
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 text-white"
        >
          <img src={IMAGES.close} alt="close" className="w-6 h-6 brightness-0 invert" />
        </button>
      )}

      {/* User Profile Section */}
      <Link to={'/profile'} className="no-underline">
        <div className="flex flex-col items-center mt-10 mb-8 px-6">
          <img
            src={user?.profile_picture || `https://ui-avatars.com/api/?name=${user?.username || 'User'}`}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white/30 mb-4 object-cover"
          />
          <div className="text-center">
            <h3 className="text-white font-bold text-lg leading-tight">
              {user?.fullname || 'Guest'}
            </h3>
            <p className="text-green-100 text-sm mt-1">
              {user?.farm_name}
            </p>
            <p className="text-green-200 text-xs">
              @{user?.username}
            </p>
          </div>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile-only Links that are usually in Top Nav */}
        <div className="lg:hidden">
          <div className="border-t border-white/20 my-2 mx-6"></div>
          <Sidemenu img={IMAGES.home} label={'Herds'} path={'/'} />
          <Sidemenu img={IMAGES.add} label={'Add'} path={'/add'} />
          <Sidemenu img={IMAGES.coin} label={'Finance'} path={'/finance'} />
          <Sidemenu img={IMAGES.file} label={'Report'} path={'/report'} />
        </div>

        <div className="border-t border-white/20 my-2 mx-6"></div>
        <Sidemenu img={IMAGES.file} label={'Report'} path={'/report'} />
        <Sidemenu img={IMAGES.weight} label={'Weight History'} path={'/weighthistory'} />
        <Sidemenu img={IMAGES.parents} label={'Parents'} path={'/parents'} />

        <div className="mt-auto pointer-events-none h-4"></div> {/* Spacer */}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto pb-8">
        <div className="border-t border-white/20 mb-4 mx-6"></div>
        <Sidemenu img={IMAGES.setting} label={'Setting'} path={'/setting'} />
        <Sidemenu
          img={IMAGES.logout}
          label={'Logout'}
          path={'/'}
          onPress={() => {
            localStorage.clear()
            window.location.reload(false)
          }}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header - Visible only on small screens (< lg) */}
      <div className="fixed top-0 left-0 w-full h-16 bg-[#009A48] z-[60] flex items-center px-4 shadow-md lg:hidden justify-between">
        <div className="flex items-center">
          <button
            onClick={openModal}
            className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white mr-3 transition-colors"
          >
            <img src={IMAGES.menu} alt="menu" className="w-6 h-6 brightness-0 invert" />
          </button>
          <h1 className="text-white font-bold text-xl tracking-tight">HerdHelp</h1>
        </div>
      </div>

      {/* Desktop Fixed Sidebar - Visible only on large screens (>= lg) */}
      <div className="fixed top-0 left-0 w-64 h-full z-50 shadow-xl hidden lg:block">
        <SidebarContent isMobile={false} />
      </div>

      {/* Mobile Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
          },
          content: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '80%', // Takes up 80% of screen width on mobile
            maxWidth: '300px',
            border: 'none',
            background: '#009A48',
            padding: 0,
            borderRadius: '0 16px 16px 0',
            outline: 'none',
          }
        }}
        ariaHideApp={false}
      >
        <SidebarContent isMobile={true} />
      </Modal>
    </>
  )
}

