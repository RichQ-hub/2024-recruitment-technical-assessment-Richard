import { noto } from '@/fonts';
import { CourseDetails } from '@/types/course';
import Link from 'next/link';
import React from 'react'
import StarRating from '../StarRating';
import TermTag from './TermTag';

const CourseCard = ({
  courseInfo
} : {
  courseInfo: CourseDetails;
}) => {
  return (
    <li className='shadow-course-card rounded-xl w-full max-w-[360px] min-w-min hover:bg-zinc-100'>
      <Link href='/' className='block p-6'>
        {/* Card Header */}
        <div className='flex justify-between mb-2 gap-12'>
          <h2 className={`${noto.className} font-extrabold text-2xl`}>
            {courseInfo.course_prefix}{courseInfo.course_code}
          </h2>

          {/* Review Data */}
          <div>
            <StarRating rating={courseInfo.average_stars} />
            <p className='text-sm text-zinc-600'>{courseInfo.total_reviews} reviews</p>
          </div>
        </div>

        {/* Course Title */}
        <p className='mb-10 text-sm'>{courseInfo.course_title}</p>

        {/* Course Terms */}
        <ul className='flex flex-wrap items-center gap-2'>
          {courseInfo.offered_terms.map((term, idx) => {
            return (
              <TermTag key={idx} title={term} />
            )
          })}
        </ul>
      </Link>
    </li>
  )
}

export default CourseCard;
