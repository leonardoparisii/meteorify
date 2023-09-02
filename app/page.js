import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
    <div className='w-full m-auto font-satoshi'>
        <div className='flex justify-start'>
            <div className='w-full pr-4 sm:p-0 md:w-1/2 flex flex-col gap-4'>
                <h1 className='text-5xl md:text-7xl'>Meteo App Is Your Next Forecast Provider</h1>
                <p className='text-slate-400'>Search for free infos about any city you want, in a easy and fast way</p>
                <Link href='/search' className="w-fit text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2  dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700">Start To Search</Link>
            </div>
        </div>
    </div>
  )
}

export default Landing
