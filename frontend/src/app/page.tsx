import CoursesList from '@/components/CoursesList';
import SearchBar from '@/components/SearchBar';
import SortButton from '@/components/SortButton';
import courseData from '../courses.json';
import HeroTitle from '@/components/HeroTitle/HeroTitle';

const SORT_OPTIONS = [
  'Alphabetical',
  'Highest Rated',
  'Lowest Rated',
  'Reviews (High - Low)',
  'Reviews (Low - High)'
];

export default function HomePage() {
  return (
    <main className='mx-auto py-6 max-w-6xl'>
      {/* Header Section */}
      <header className='mb-10'>
        <small className='block font-medium text-sm mb-3'>
          DevSoc presents
        </small>
        <HeroTitle title='unilectives' />
        <p className='font-extrabold'>
          Your one-stop shop for UNSW course and elective reviews.
        </p>
      </header>

      {/* Search Bar */}
      <SearchBar />

      {/* Filters */}
      <section className='flex items-center mb-8'>
        <SortButton options={SORT_OPTIONS} />
      </section>

      {/* Course List */}
      <CoursesList courses={courseData} />
    </main>
  );
}
