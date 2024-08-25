import React from 'react'

export const Header = () => {
  return (
    // <div className='border-b w-[1199px] h-[75px]'>
                <div className='w-full h-full flex items-center justify-between '>
                    <h2 className='ml-6 font-semibold text-lg'>Dashboard</h2>
                    <div className='flex items-center mr-10 h-[34px] gap-6'>
                        <div className='relative w-[251px] h-full'>
                            <Search className='absolute top-2 left-3 text-xs h-[18px] w-[18px] text-[#667085]'/>
                        <input className='border pl-10 w-full h-full placeholder:font-semibold rounded-md ' placeholder='Search...' type="text" />
                        </div>
                        <Bell className='h-[18px] w-[18px] text-[#667085]'/>
                    </div>
                </div>
        // </div>
  )
}
