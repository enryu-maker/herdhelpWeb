import React from "react";
import { IMAGES } from "../../Theme/Image";

export default function ReportCard({ data, onPress }) {
    return (
        <div
            onClick={onPress}
            className="bg-white hover:bg-gray-50 cursor-pointer rounded-xl p-3 shadow-sm border border-gray-100 flex flex-col items-center transition-all hover:shadow-md h-full"
        >
            {/* Image */}
            <div className="w-full aspect-square mb-3 relative">
                <img
                    src={data.animal_image || data.image}
                    alt={data.tag_number || "Animal"}
                    className="w-full h-full rounded-lg object-cover bg-gray-200 absolute top-0 left-0"
                />
            </div>

            {/* Info */}
            <div className="w-full flex flex-col items-center text-center space-y-1">
                <span className="text-[#009A48] font-bold text-sm truncate w-full">
                    {data.support_tag}
                </span>
                <span className="text-gray-900 font-bold text-base truncate w-full">
                    {data.name}
                </span>
                <span className="text-gray-500 text-xs">
                    {data.weight} {data.weight ? (typeof data.weight === 'string' && data.weight.includes('kg') ? '' : 'lbs') : ''}
                </span>
            </div>

            {/* Footer Icons (Gender & Arrow) */}
            <div className="w-full flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <img
                    src={data.gender === "Male" ? IMAGES.male : IMAGES.female}
                    alt={data.gender}
                    className="w-6 h-6 object-contain opacity-80"
                />
                {/* Arrow - optional for grid cards, but keeping for interaction hint */}
                <img
                    src={IMAGES.rightone}
                    alt="arrow"
                    className="w-4 h-4 opacity-40"
                />
            </div>
        </div>
    );
}
