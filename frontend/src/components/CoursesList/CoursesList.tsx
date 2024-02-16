import React from 'react';
import CourseCard from '../CourseCard';
import { CourseDetails } from '@/types/course';

const CoursesList = ({
  courses
} : {
  courses: CourseDetails[];
}) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,_minmax(360px,1fr))] auto-rows-max justify-items-center gap-8'>
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.course_code}
            courseInfo={course}
          />
        )
      })}
    </ul>
  )
}

export default CoursesList;
