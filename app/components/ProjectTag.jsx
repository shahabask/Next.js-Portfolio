import React from 'react'

function ProjectTag({name,onClick,isSelected}) {
    const buttonStyles= isSelected ? 'text-white border-sky-400'
    : "text-[#ADB7BE] border-slate-600 hover:border-sky-400"
  return (
    <button
    className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
  >
    {name}
  </button>
  )
}

export default ProjectTag