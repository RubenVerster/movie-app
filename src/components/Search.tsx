import { useState, useEffect } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Spinner } from 'react-bootstrap';
import debounce from 'lodash/debounce';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { IResult, IMovie } from '../types';

const Search = () => {
  const { REACT_APP_TMDB_API_KEY } = process.env;

  const [localSearchTerm, setLocalSearchTerm] = useState<string>('');
  const [searchError, setSearchError] = useState<string>('');
  const [searching, setSearching] = useState<boolean>(false);

  useEffect(() => {
    if (localSearchTerm.length <= 0) return;
    searchForMovies();
  }, [localSearchTerm]);

  const debouncedSetSearchTerm = debounce(async (e: any) => {
    setSearchError('');
    await setLocalSearchTerm(e.target.value);
  }, 777);

  const setSearchResults = useStoreActions(
    (actions: any) => actions.setSearchResults
  );
  const searchResults = useStoreState((state: any) => state.searchResults);
  const setModalOpen = useStoreActions((actions: any) => actions.setModalOpen);
  const setCurrentMovie = useStoreActions(
    (actions: any) => actions.setCurrentMovie
  );

  const searchForMovies = async () => {
    setSearching(true);
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_API_KEY}&query=${localSearchTerm}`
      );
      if (response.data.results.length > 0) {
        setSearchError('');
        setSearchResults(
          //filter out any movies tat dont have image poster
          response.data.results.filter(
            (movie: IMovie) => movie.poster_path !== null
          )
        );
      } else {
        setSearchError('No results found');
      }

      setSearching(false);
    } catch (error) {
      setSearchError(error.message);
      setSearching(false);
      return;
    }
  };

  const handleModalOpen = (movie: IMovie) => {
    setCurrentMovie(movie);
    setModalOpen(true);
  };

  const generateMovies = () => {
    console.log('generate movies');
    return searchResults.map((movie: IMovie) => {
      return (
        <div
          key={movie.id}
          className='sm:w-full md:w-1/2 lg:w-1/4 p-2'
          onClick={() => handleModalOpen(movie)}
        >
          <img
            alt='poster'
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className='max-h-full'
          />
        </div>
      );
    });
  };

  return (
    <div className='mt-4 flex flex-col items-center justify-center mb-32 w-100'>
      <InputGroup className='mb-3 px-2 max-w-lg sm:w-100'>
        <FormControl
          onChange={(e) => {
            debouncedSetSearchTerm(e);
          }}
          placeholder='Search For A Movie...'
          aria-label='Search For A Movie...'
          aria-describedby='basic-addon2'
        />
      </InputGroup>
      {searching && (
        <div>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      )}
      {searchError && <h2 className='text-red-700 text-bold'>{searchError}</h2>}
      <div
        className='flex flex-row items-center justify-center w-75
      '
      >
        <div className='flex flex-wrap flex-row w-full items-center'>
          {searchResults.length > 0 && generateMovies()}
        </div>
      </div>
    </div>
  );
};

export default Search;
