import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { PornFilter } from '../types';

const PornModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const setAllowPorn = useStoreActions((actions: any) => actions.setAllowPorn);

  const handlePornFilter = (yesNo: PornFilter) => {
    switch (yesNo) {
      case PornFilter.yes:
        setAllowPorn(true);
        break;
      case PornFilter.no:
        setAllowPorn(false);
        break;
      default:
        setAllowPorn(false);
        break;
    }
    setModalOpen(false);
  };

  return (
    <Modal centered show={modalOpen}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Adult Content Warning</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Please be aware, we have adult content on this website. Please
            verify that you are over 18 years old.
          </p>
        </Modal.Body>

        <Modal.Footer className='flex felx-row'>
          <Button
            variant='secondary'
            onClick={() => {
              handlePornFilter(PornFilter.yes);
            }}
          >
            Yes, I am over 18 years old
          </Button>
          <Button
            variant='warning'
            onClick={() => {
              handlePornFilter(PornFilter.no);
            }}
          >
            I am under 18 years old
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default PornModal;
