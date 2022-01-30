import { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';
import { useStoreActions } from 'easy-peasy';

const Header = () => {
  const [search, setSearch] = useState('');

  const setSearchTerm = useStoreActions((actions: any) => actions.setSearchTerm);

  const setSearching = useStoreActions((actions: any) => actions.setSearching);

  const debouncedSearch = debounce(() => {
    setSearching(true);
    setSearchTerm(search);
  }, 500);

  return (
    <div className='p-4 flex flex-col  justify-items-center content-center items-center w-100 bg-red-50'>
      <h1 className='mb-4'>Movies</h1>
      <InputGroup className='mb-3 max-w-lg'>
        <FormControl
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search For A Movie...'
          aria-label='Search For A Movie...'
          aria-describedby='basic-addon2'
        />
        <Button
          onClick={() => setSearching(true)}
          variant='outline-secondary'
          id='button-addon2'
        >
          <FaSearch />
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
