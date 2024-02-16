'use client';

import { noto } from '@/fonts';
import React, { useState } from 'react';
import randomColor from 'randomcolor';

const HeroTitle = ({
  title
}: {
  title: string;
}) => {
  const [colour, setColour] = useState<string>('#1479f2');

  const handleChangeColour = () => {
    const newColour = randomColor();
    setColour(newColour);
  }

  return (
    <h1
      className={`${noto.className} mb-3 font-black text-6xl cursor-pointer`}
      style={{ color: `${colour}` }}
      onClick={() => handleChangeColour()}
    >
      {title}
    </h1>
  )
}

export default HeroTitle;
