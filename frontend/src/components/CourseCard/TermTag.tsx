import React from 'react'

const TermTag = ({
  title
}: {
  title: string;
}) => {
  return (
    <li className='bg-[#ccebf6] px-2 py-1 rounded-3xl text-sm'>
      {title}
    </li>
  )
}

export default TermTag;
