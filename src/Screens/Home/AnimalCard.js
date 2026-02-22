import React from "react";
import useMediaQuery from "../../Component/useMediaQuery";
import { baseURL } from "../../helpers/helpers";
import { IMAGES } from "../../Theme/Image";
import { useSelector } from "react-redux";

export default function AnimalCard({
    data,
    onPress,
}) {
    const matches = useMediaQuery('(max-width:820px)')
    const unit = JSON.parse(useSelector(state => state.Reducers.unit))

    return (
        <div
            onClick={onPress}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer relative flex items-center justify-between group overflow-hidden"
        >
            {/* Red Flag Indicator */}
            {data.flagged && (
                <div className="absolute top-0 left-0">
                    <div className="bg-red-500 text-white p-1 rounded-br-lg shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            )}

            <div className="flex items-center space-x-4 flex-1">
                {/* Animal Image */}
                <img
                    src={data.animal_image != null ? baseURL + data.animal_image : baseURL + data.image}
                    alt={data.tag_number}
                    className="h-16 w-16 md:h-20 md:w-20 rounded-lg object-cover bg-gray-100"
                />

                {/* Details */}
                <div className="flex flex-col flex-1">
                    <div className="flex items-center">
                        <h3 className="text-lg font-bold text-gray-900 mr-2">
                            {data.tag_number || data.name}
                        </h3>
                        {/* Gender Icon inline with title or just below */}
                        <img
                            src={data.gender === "Male" ? IMAGES.male : IMAGES.female}
                            alt={data.gender}
                            className="h-4 w-4 opacity-70"
                        />
                    </div>

                    <p className="text-sm text-gray-500 font-medium">
                        Tag: {data.support_tag || data.name}
                    </p>
                    <p className="text-sm text-gray-900 font-semibold mt-1">
                        {unit ? `${data.weight} Lbs` : `${data.weight_kg} Kg`}
                    </p>
                </div>
            </div>

            {/* Right Arrow / Chevron */}
            <div className="text-gray-300 group-hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
}
