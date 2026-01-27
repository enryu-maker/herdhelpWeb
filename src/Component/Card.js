import React from "react";
import { IMAGES } from "../Theme/Image";
import useMediaQuery from "./useMediaQuery";

export default function Card({
  Tagnumber,
  numaninmal,
  Name,
  cond,
  Gender,
  Weight,
  img,
  onPress,
  weight_kg,
  data
}) {

  const matches = useMediaQuery('(max-width:820px)')

  return (
    <div
      onClick={onPress}
      className={`
        bg-gray-200 
        rounded-[30px] 
        p-6 
        flex 
        flex-col 
        items-center 
        justify-center 
        hover:shadow-lg 
        transition-all 
        cursor-pointer
        ${matches ? 'w-[160px] h-[200px] m-2' : 'w-[250px] h-[300px] m-6'}
      `}
    >
      {/* Icon Image */}
      <img
        src={img}
        alt={Name}
        className={`
          object-contain 
          mb-6
          ${matches ? 'w-16 h-16' : 'w-24 h-24'}
        `}
      />

      {/* Title */}
      <h3 className={`
        font-bold 
        text-gray-800 
        mb-4
        ${matches ? 'text-sm' : 'text-xl'}
      `}>
        {Name}
      </h3>

      {/* Count Badge */}
      <div className={`
        bg-white 
        rounded-full 
        flex 
        items-center 
        justify-center
        shadow-sm
        font-bold
        text-black
        ${matches ? 'px-4 py-1 text-xs' : 'px-8 py-2 text-sm'}
      `}>
        <img
          src={img}
          alt="icon"
          className={`
            object-contain 
            mr-2
            ${matches ? 'w-3 h-3' : 'w-4 h-4'}
          `}
        />
        <span>x {numaninmal}</span>
      </div>
    </div>
  );
}
