import React from 'react'

export function Card({ name = "name", btn = "explore more", image="" }) {
  return (
    <>
       <div className="relative h-[400px] w-[300px] rounded-2xl m-12 transition-transform transform hover:scale-110">
        <img
          src={image}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-2xl object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-thin text-white">{name}</h1>
          {/* <p className="mt-2 text-sm text-gray-300">{about}</p>  */}
       <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btn} →
          </button>
        </div>
      </div>
    </>
  )
}