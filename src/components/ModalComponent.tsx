import { Button, Modal } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const ModalComponent = () => {
  const setModalOpen = useStoreActions((actions: any) => actions.setModalOpen);
  const modalOpen = useStoreState((state: any) => state.modalOpen);

  const currentMovie = useStoreState((state: any) => state.currentMovie);
  const [open, setOpen] = useState(modalOpen);
  let selectedMovie = currentMovie;

  useEffect(() => {
    selectedMovie = currentMovie;
  }, [currentMovie]);

  useEffect(() => {
    setOpen(modalOpen);
  }, [modalOpen]);

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
          <Button variant='warning' onClick={() => {}}>
            <FaRegStar size={21} />
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default ModalComponent;
