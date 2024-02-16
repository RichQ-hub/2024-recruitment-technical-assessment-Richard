'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();

  return (
    <div
      className='mb-4 flex h-10 rounded-md border-[1px] border-unielectives-brand overflow-hidden'
      onClick={() => router.push('/popup')}
    >
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
