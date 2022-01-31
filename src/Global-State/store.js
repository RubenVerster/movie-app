import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
  persist(
    {
      searchResults: [],
      favourites: [],
      searching: false,
      currentPage: 'home',
      currentMovie: {},
      addFavourites: action((state, payload) => {
        state.favourites.push(payload);
      }),
      clearSearch: action((state) => {
        state.searchedTerm = '';
      }),
      clearResults: action((state) => {
        state.searchResults = [];
      }),
      setSearchResults: action((state, payload) => {
        state.searchResults = payload;
      }),
      setSearching: action((state, payload) => {
        state.searching = payload;
      }),
      setCurrentPage: action((state, payload) => {
        if (state.currentPage === payload) return;
        state.currentPage = payload;
      }),
      setCurrentMovie: action((state, payload) => {
        state.currentMovie = payload;
      }),
    },
    {
      allow: ['searchResults', 'favourites', 'currentPage', 'currentMovie'],
    }
  )
);

export default store;
