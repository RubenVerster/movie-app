
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './components/Favourites';
import Search from './components/Search';

import { useStoreRehydrated, useStoreState } from 'easy-peasy';
import { Spinner } from 'react-bootstrap';

import { PageVariation } from './types';

const App = () => {
  const isRehydrated = useStoreRehydrated();
  const currentPage = useStoreState((state: any) => state.currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case PageVariation.favourites:
        return <Favourites />;
      case PageVariation.search:
        return <Search />;
      default:
        return <Search />;
    }
  };

  return (
    <div className='flex flex-col w-100 items-center justify-around h-full text-white'>
      {isRehydrated ? (
        <>
          <Header />
          {currentPage && renderPage()}
          <Footer />
        </>
      ) : (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default App;
