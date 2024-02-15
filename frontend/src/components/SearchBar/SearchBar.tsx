import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className='mb-4 flex h-10 rounded-md border-[1px] border-unielectives-brand'>
      <MagnifyingGlassIcon className='p-3 stroke-unielectives-brand' />
      <input
        className='w-full font-normal text-sm pr-3 placeholder:text-unielectives-brand outline-none'
        type='text'
        name=''
        id='course-search'
        placeholder='Search for a course e.g. COMP1511'
      />
    </div>
  )
}

export default SearchBar;
