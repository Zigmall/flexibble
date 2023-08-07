import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' alt='Flexible' width={115} height={42} />

          </Link>
        <ul className='xl:flex hidden text-spall gap-7'>

        </ul>
      </div>
    </nav>;
};

export default Navbar;
