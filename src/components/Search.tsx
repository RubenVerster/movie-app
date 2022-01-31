import { useState, useEffect } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';
import { SearchType } from '../types';

const Search = () => {
  const { REACT_APP_TMDB_API_KEY } = process.env;

  const [localSearchTerm, setLocalSearchTerm] = useState<string>('');

  useEffect(() => {
    if (localSearchTerm.length <= 0) return;
    console.log(localSearchTerm);
  }, [localSearchTerm]);

  const debouncedSetSearchTerm = debounce(async (e: any) => {
    await setLocalSearchTerm(e.target.value);
  }, 500);

  //   const fetchData = async (type: SearchType) => {
  //     switch (type) {
  //       case SearchType.movie:
  //         return console.log('fetching movies');
  //       case SearchType.details:
  //         return console.log('fetching details');
  //       default:
  //         return;
  //     }
  //   };

  // try {
  //     let data = await axios.get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
  //     );
  //       console.log(data);
  //       return data
  //   } catch (error) {
  //       console.warn(error);
  //       return
  //   }

  return (
    <div className='mt-4 w-1/2 w-100 max-w-lg flex items-center justify-center'>
      <InputGroup className='mb-3  sm:w-100'>
        <FormControl
          onChange={(e) => {
            debouncedSetSearchTerm(e);
          }}
          placeholder='Search For A Movie...'
          aria-label='Search For A Movie...'
          aria-describedby='basic-addon2'
        />
        <Button
          onClick={(e) => console.log('search')}
          variant='outline-secondary'
          id='button-addon2'
        >
          <FaSearch />
        </Button>
      </InputGroup>
      <></>
    </div>
  );
};

export default Search;
