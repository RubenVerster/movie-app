import { useStoreState, useStoreActions } from 'easy-peasy';
import { useState } from 'react';

const Favourites = () => {
  const favourites = useStoreState((state: any) => state.favourites);
  const setFavourites = useStoreActions(
    (actions: any) => actions.setFavourites
  );

  return <div className='mt-4'>Favourites</div>;
};

export default Favourites;
