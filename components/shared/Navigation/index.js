'use client'
import Link from 'next/link'
import React from 'react'
import data from '@/data/shared/navigation.json'

function Navigation() {
  return (
    <div className='grid grid-cols-3 p-4  sm:p-6 select-none bg-transparent backdrop-blur-md font-satoshi'>
      <Link href='/'>
        <span className='text-2xl'>Meteo</span>
      </Link>
      <div className='flex gap-4 justify-center items-center'>
        {data.items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
          >
            <div>
              {item.text}
            </div>
          </Link>
      ))}
      </div>
    </div>
  )
}

export default Navigation