import { useStoreState, useStoreActions } from 'easy-peasy';
import { useState } from 'react';

const Favourites = () => {
  const favourites = useStoreState((state: any) => state.favourites);
  const setFavourites = useStoreActions(
    (actions: any) => actions.setFavourites
  );

  const currentMovie = useStoreState((state: any) => state.currentMovie);
  console.log(currentMovie);

  const renderFavourites = () => {
    return favourites.map((movie: any) => (
      <div
        key={movie.title}
        className='h-36 my-2 w-100 flex flex-row border-2 rounded-md border-l-none overflow-hidden'
      >
        <img
          className='h-full  '
          src={`https://image.tmdb.org/t/p/w500//${currentMovie.poster_path}`}
          alt='Poster'
        />
        <div className='m-auto text-xl md:text-md'>{currentMovie.title}</div>
      </div>
    ));
  };

  return <div className='mt-4 w-100 max-w-lg '>{renderFavourites()}</div>;
};

export default Favourites;
