'use client';

import { useRouter } from 'next/navigation';

export default async function CommunityModal() {
  const router = useRouter();

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-[#00000053]'>
      <dialog open className='flex items-center justify-center w-[400px] h-[400px] bg-white border-2 border-black'>
        <button
          className='py-1 px-2 bg-black text-white hover:bg-zinc-600'
          type='button'
          onClick={() => router.back()}
        >Dismiss</button>
      </dialog>
    </div>
  )
}