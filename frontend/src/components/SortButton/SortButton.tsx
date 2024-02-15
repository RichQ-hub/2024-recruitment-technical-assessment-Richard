'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const SortButton = ({
  options
}: {
  options: string[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <button
      className='relative w-max min-w-24 flex items-center gap-6 py-2 px-3 border-[1px] border-zinc-500 rounded-md text-zinc-500'
      type='button'
      onClick={() => setIsOpen(!isOpen)}
    >
      <p>{options[Number(searchParams.get('sortBy')) ?? 0]}</p>
      {isOpen ? (
        <ChevronUpIcon className='stroke-black h-4 w-4' />
      ) : (
        <ChevronDownIcon className='stroke-black h-4 w-4' />
      )}

      {/* Dropdown Menu */}
      {isOpen &&
        <ul className='absolute top-[calc(100%)] right-0 left-0 shadow-lg'>
          {options.map((opt, idx) => {
            return (
              <li
                className='flex justify-start w-full px-4 py-2 hover:bg-zinc-100'
                key={idx}
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  params.set('sortBy', idx.toString());
                  router.push(`${pathname}?${params.toString()}`);
                }}
              >
                {opt}
              </li>
            )
          })}
        </ul>
      }
    </button>
  )
}

export default SortButton;
