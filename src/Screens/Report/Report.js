import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getReports } from '../../Store/actions';
import Sidenav from '../../Component/Nav/sidenav';
import NavBarMain from "../../Component/Nav/navmain";
import Loading from '../../Component/Loading';

export default function Report() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access = useSelector(state => state.Reducers.authToken);
  const reports = useSelector(state => state.Reducers.reports);

  useEffect(() => {
    dispatch(getReports(access));
  }, [dispatch, access]);

  // Internal Card Component
  const ReportItem = ({ item }) => (
    <div
      onClick={() => {
        navigate('/reportop', {
          state: { api: item.api, label: item.name }
        });
      }}
      className="bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
    >
      {/* Icon Container */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>

      {/* Title */}
      <div className="mt-4">
        <h3 className="text-gray-900 font-bold text-base md:text-lg text-center">
          {item.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* Sidebar */}
      <Sidenav active={'Report'} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen relative lg:ml-64 pt-16 lg:pt-0">
        <NavBarMain page={'report'} />

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <h1 className="text-2xl font-bold text-[#009A48] mb-8">Report</h1>

          {reports && reports.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {reports.map((item) => (
                <ReportItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              {/* Show loading if strictly empty (or could be empty list). 
                             Original just showed Loading when empty. */}
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


