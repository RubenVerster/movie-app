import { Button, Modal } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

/**
 * This is the modal component that is used to display the details related to a movie the user has clicked on
 * THe user can use this component to add the movie to their list of favourites or to review the movie
 * @returns {JSX.Element}
 */
const ModalComponent = () => {
  const setModalOpen = useStoreActions((actions: any) => actions.setModalOpen);
  const deleteFavorite = useStoreActions(
    (actions: any) => actions.deleteFavorite
  );
  const addFavourites = useStoreActions(
    (actions: any) => actions.addFavourites
  );
  const modalOpen = useStoreState((state: any) => state.modalOpen);
  const favouritesIds = useStoreState((state: any) => state.favouritesIds);
  const currentMovie = useStoreState((state: any) => state.currentMovie);
  const [open, setOpen] = useState(modalOpen);
  let selectedMovie = currentMovie;

  useEffect(() => {
    selectedMovie = currentMovie;
  }, [currentMovie]);

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

  const determineFavouriteIcon = () => {
    if (favouritesIds.includes(selectedMovie.id)) {
      return <FaStar className='text-white' />;
    } else {
      return <FaRegStar className='text-white' />;
    }
  };

  const toggleFavourite = () => {
    if (favouritesIds.includes(selectedMovie.id)) {
      deleteFavorite(selectedMovie.id);
    } else {
      addFavourites(selectedMovie);
    }
  };

  return (
    <Modal centered show={open}>
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
          <Button
            variant='warning'
            onClick={() => {
              toggleFavourite();
            }}
          >
            {determineFavouriteIcon()}
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalComponent;
