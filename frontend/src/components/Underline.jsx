import React from 'react'

export const Underline = () => {
    return (
        <div className="flex justify-center items-center relative mb-10">
            <div className="w-[150px] h-[1px] bg-slate-400 absolute"></div>
            <div className="w-[14px] h-[14px] bg-red-500 absolute rounded-full"></div>
        </div>
    )
}
