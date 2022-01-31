import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
  persist(
    {
      modalOpen: false,
      searchResults: [],
      favourites: [],
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
      setCurrentPage: action((state, payload) => {
        if (state.currentPage === payload) return;
        state.currentPage = payload;
      }),
      setCurrentMovie: action((state, payload) => {
        state.currentMovie = payload;
      }),
      setModalOpen: action((state, payload) => {
        state.modalOpen = payload;
      }),
    },
    {
      allow: ['searchResults', 'favourites', 'currentPage', 'currentMovie'],
    }
  )
);

export default store;
