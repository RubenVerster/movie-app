import { GiPopcorn } from 'react-icons/gi';
import { MdMovieFilter } from 'react-icons/md';

const Header = () => {
  return (
    <div className='text-4xl p-4 flex flex-row justify-items-center content-center justify-center cursor-pointer w-100 bg-yellow-500 border-b-2 '>
      <GiPopcorn size={42} />
      <h1 className='mx-5'>Movies</h1>
      <MdMovieFilter size={42} />
    </div>
  );
};

export default Header;
