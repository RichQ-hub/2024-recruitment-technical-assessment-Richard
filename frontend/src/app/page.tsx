import SearchBar from '@/components/SearchBar';
import SortButton from '@/components/SortButton';
import { noto } from '@/fonts';
import Image from "next/image";

const SORT_OPTIONS = ['Alphabetical', 'Threads (High - Low)', 'Threads (Low - High)'];

export default function HomePage() {
  return (
    <main className='mx-auto py-6 max-w-5xl'>
      {/* Header Section */}
      <header className='mb-10'>
        <small className='block font-medium text-sm mb-3'>
          DevSoc presents
        </small>
        <h1 className={`${noto.className} mb-3 font-black text-unielectives-brand text-6xl font-h`}>
          unilectives
        </h1>
        <p className='font-extrabold'>
          Your one-stop shop for UNSW course and elective reviews.
        </p>
      </header>

      {/* Search Bar */}
      <SearchBar />

      {/* Filters */}
      <section className='flex items-center'>
        <SortButton options={SORT_OPTIONS} />
      </section>

      {/* Course List */}
    </main>
  );
}
