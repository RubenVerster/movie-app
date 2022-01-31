import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

const Favourites = () => {
  const favourites = useStoreState((state: any) => state.favourites);
  const setCurrentMovie = useStoreActions(
    (actions: any) => actions.setCurrentMovie
  );
  const setModalOpen = useStoreActions((actions: any) => actions.setModalOpen);

  const handleModalOpen = (movie: any) => {
    setModalOpen(true);
    setCurrentMovie(movie);
  };

  useEffect(() => {
    renderFavourites();
  }, [favourites]);

  const renderFavourites = () => {
    return favourites.map((movie: any) => (
      <div
        key={movie.title}
        className='h-36 my-2 w-100 flex flex-row border-2 rounded-md border-l-none overflow-hidden cursor-pointer'
        onClick={() => {
          handleModalOpen(movie);
        }}
      >
        <img
          className='h-full  '
          src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
          alt='Poster'
        />
        <div className='m-auto text-xl md:text-md'>{movie.title}</div>
      </div>
    ));
  };

  return <div className='mt-4 w-100 max-w-lg '>{renderFavourites()}</div>;
};

export default Favourites;
