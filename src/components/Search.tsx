import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';
import { useStoreActions } from 'easy-peasy';

const Search = () => {
  const [search, setSearch] = useState('');

  const setSearchTerm = useStoreActions(
    (actions: any) => actions.setSearchTerm
  );

  const setSearching = useStoreActions((actions: any) => actions.setSearching);

  const debouncedSearch = debounce(() => {
    setSearching(true);
    setSearchTerm(search);
  }, 500);

  return (
    <div>
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

export default Search;
