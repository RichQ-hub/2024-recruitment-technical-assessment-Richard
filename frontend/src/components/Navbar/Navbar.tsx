import React from 'react';
import Navlinks from './Navlinks';
import Image from 'next/image';
import UnielectivesLogo from '../../assets/unilectives.svg';

const Navbar = () => {
  return (
    <nav className='fixed left-0 top-0 bottom-0 w-20 p-4 bg-[#f9fafb] flex flex-col'>
      {/* Logo */}
      <div className='p-2 mb-2'>
        <Image src={UnielectivesLogo} alt='Unielectives Logo' className='w-8 h-8' />
      </div>

      {/* Navigation Links */}
      <Navlinks />
    </nav>
  )
}

export default Navbar;
