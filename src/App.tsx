import { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './components/Favourites';
import Search from './components/Favourites';

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
      console.log(data);
    } catch (error) {
      console.warn(error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'favourites':
        return <Favourites />;
      case 'search':
        return <Search />;
      default:
        return <Search />;
    }
  };

  return (
    <div className='flex flex-col w-100 items-center justify-around h-full'>
      <Header />
      <div>{currentPage}</div>
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
