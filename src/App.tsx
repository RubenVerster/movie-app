import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './components/Favourites';
import Search from './components/Search';
import { Button, Modal } from 'react-bootstrap';

import { useStoreRehydrated, useStoreState, useStoreActions } from 'easy-peasy';
import { Spinner } from 'react-bootstrap';

import { PageVariation } from './types';
import { useEffect } from 'react';

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

  const currentMovie = useStoreState((state: any) => state.currentMovie);
  const setModalOpen = useStoreActions((actions: any) => actions.setModalOpen);
  const modalOpen = useStoreState((state: any) => state.modalOpen);

  let selectedMovie = currentMovie;

  useEffect(() => {
    selectedMovie = currentMovie;
  }, [currentMovie]);
  return (
    <div className='flex flex-col w-100 items-center justify-around h-full text-white'>
      {isRehydrated ? (
        <>
          <Header />
          <Modal centered show={modalOpen} onHide={setModalOpen(false)}>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>{selectedMovie.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{selectedMovie.overview}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant='secondary'
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button variant='primary' onClick={() => {}}>
                  Favourite
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal>
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
