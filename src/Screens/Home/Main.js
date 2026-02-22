import React, { useState } from "react";
import { baseURL } from "../../helpers/helpers";
import { useNavigate } from 'react-router-dom';
import NavBarMain from "../../Component/Nav/navmain";
import Card from "../../Component/Card";
import { useSelector, useDispatch } from 'react-redux';
import { getAlerts, getFcat, getFinance, getGender, getHerds, getOverview, getSpecies, getSubs, getTags, UserData } from '../../Store/actions';
import Sidenav from "../../Component/Nav/sidenav";
import useMediaQuery from "../../Component/useMediaQuery";
import FinanceModal from "../../Component/Modals/FinanceModal";
import { IMAGES } from "../../Theme/Image";

export default function Main() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  // const access = useSelector(state => state.Reducers.authToken)

  const [financeModalOpen, setFinanceModalOpen] = useState(false);

  React.useEffect(() => {
    dispatch(getHerds())
    dispatch(getFinance())
    dispatch(getSpecies())
    dispatch(getFcat())
    dispatch(getTags())
    dispatch(UserData())
    dispatch(getSubs())
    dispatch(getOverview())
    dispatch(getGender())
    dispatch(getAlerts())
  }, [])

  const animal = useSelector(state => state.Reducers.herds)
  const matches = useMediaQuery('(max-width:820px)')

  return (
    <div className="flex bg-white min-h-screen font-sans">
      {/* Sidebar */}
      <Sidenav active={'Herds'} />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ml-0 lg:ml-[250px] pt-16 lg:pt-0`}>
        <div className="sticky top-0 z-10 bg-white">
          <NavBarMain page={"herds"} />
        </div>

        <div className="p-4 md:p-8 flex-1 overflow-y-auto">
          {/* Header Row with Action Button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#009A48]">Herds</h1>

            <button
              onClick={() => setFinanceModalOpen(true)}
              className="bg-[#009A48] hover:bg-[#007f3b] text-white px-6 py-2 rounded-lg shadow-md flex items-center transition-all font-bold text-sm"
            >
              <img
                src={IMAGES.money || IMAGES.overview} // Fallback
                alt="finance"
                className="w-5 h-5 mr-2 brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              Finance
            </button>
          </div>

          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animal && animal.map((item) => (
              <Card
                key={item.id}
                img={baseURL + item.data[0]?.image}
                Name={item.label !== "Sheep" ? `My ${item.label}s` : `My ${item.label}`}
                numaninmal={`${item.data?.length}`}
                data={item.data}
                onPress={() => {
                  navigate("/animal", {
                    state: { data: item }
                  })
                }}
              />
            ))}
          </div>

          {/* Empty State / Loading Handling could go here */}
          {(!animal || animal.length === 0) && (
            <div className="text-center text-gray-400 mt-20">No herds found.</div>
          )}

          {/* Finance Modal */}
          <FinanceModal
            isOpen={financeModalOpen}
            onRequestClose={() => setFinanceModalOpen(false)}
          />

        </div>
      </div>
    </div>
  );
}
