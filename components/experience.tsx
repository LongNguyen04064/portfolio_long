"use client"
import React from 'react'

export default function Experience() {
  return (
    <div className='w-full mx-auto'>
        <div className='mb-6'>
            <p className='font-mono text-xs text-blue-700 tracking-widest uppercase mb-2'>02. Career</p>
            <div className='flex items-end justify-between flex-wrap gap-4'>
                <h2 className='text-5xl font-bold'>Experience</h2>
            </div>
            <div className='mt-4 h-px w-50 bg-linear-to-r from-blue-500 to-transparent'></div>
        </div>
        <div className='flex flex-wrap gap-4 mb-14'>
            <div className='flex items-center gap-2 px-4 py-2 rounded-xl border-2 bg-gray-50'>
                <span className='text-2xl font-black text-blue-500'>1</span>
                <span className='text-xs text-muted-foreground font-mono uppercase tracking-wider'>Roles</span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-xl border-2 bg-gray-50'>
                <span className='text-2xl font-black text-blue-500'>8+</span>
                <span className='text-xs text-muted-foreground font-mono uppercase tracking-wider'>Months</span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-xl border-2 bg-gray-50'>
                <span className='text-2xl font-black text-blue-500'>1</span>
                <span className='text-xs text-muted-foreground font-mono uppercase tracking-wider'>Clients</span>
            </div>
        </div>
    </div>
  )
}
