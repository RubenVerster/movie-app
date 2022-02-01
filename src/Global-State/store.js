import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
  persist(
    {
      modalOpen: false,
      allowPorn: false,
      searchResults: [],
      favourites: [],
      favouritesIds: [],
      currentPage: 'home',
      currentMovie: {},
      addFavourites: action((state, payload) => {
        if (state.favouritesIds.includes(payload.id)) return;
        state.favourites.push(payload);
        state.favouritesIds.push(payload.id);
      }),
      deleteFavorite: action((state, payload) => {
        state.favourites = state.favourites.filter(
          (movie) => movie.id !== payload
        );
        state.favouritesIds = state.favouritesIds.filter(
          (id) => id !== payload
        );
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
      setAllowPorn: action((state, payload) => {
        state.allowPorn = payload;
      }),
    },
    {
      allow: [
        'searchResults',
        'favourites',
        'currentPage',
        'currentMovie',
        'favouritesIds',
        'allowPorn',
      ],
    }
  )
);

export default store;
