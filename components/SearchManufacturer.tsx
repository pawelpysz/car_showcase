'use client'
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { Combobox,Transition } from '@headlessui/react'

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">

           </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer