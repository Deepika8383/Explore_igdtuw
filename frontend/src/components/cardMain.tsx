import React from 'react'

export function Card({ name = "name", btn = "explore more", image = "" }) {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md ml-24 mb-40 transition-transform transform hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md "></div>
        <img
          src={image}
          alt={name}
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent "></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white font-thin">{name}</h1>
          {/* <p className="mt-2 text-sm text-gray-300">Description here</p> */}
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white font-thin">
            Learn More →
          </button>
        </div>
      </div>

    </>
  )
}