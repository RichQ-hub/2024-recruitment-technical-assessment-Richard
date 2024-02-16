import React from 'react';

const StarRating = ({
  rating
} : {
  rating: number;
}) => {
  const stars: string[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(rating)) {
      // If the current index is less than the overall rating, then we push a full star.
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  return (
    <ul className='flex items-center text-purple-400'>
      {stars.map((star, idx) => {
        return (
          <li
            key={idx}
            className='f text-3xl'
          >{star}</li>
        )
      })}
    </ul>
  )
}

export default StarRating;
