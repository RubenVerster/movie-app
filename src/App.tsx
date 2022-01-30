import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { useStoreRehydrated, useStoreState } from 'easy-peasy';
import { Spinner } from 'react-bootstrap';

const App = () => {
  const isRehydrated = useStoreRehydrated();
  const { REACT_APP_TMDB_API_KEY } = process.env;
  const currentPage = useStoreState((state: any) => state.currentPage);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
      );
    } catch (error) {
      console.warn(error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'favourites':
        return <h1>Favourites</h1>;
      case 'search':
        return <h1>Search</h1>;
      default:
        return <h1>Search</h1>;
    }
  };

  return (
    <div className='flex flex-col w-100 items-center justify-around h-full'>
      <Header />
      {isRehydrated ? (
        renderPage()
      ) : (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
      <Footer />
    </div>
  );
};

export default App;
