import { Action } from 'easy-peasy';
import { ReactElement } from 'react';

export interface IResult {
  page: number;
  result: {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  };
  total_results: number;
  total_pages: number;
}

export interface IStoreModel {
  searchedTerm: string | null;
  searchResults: never[];
  favourites: never[];
  searching: boolean;
  addFavourites: Action<{}, any>;
  clearSearch: Action<{}, any>;
  clearResults: Action<{}, any>;
  setSearchTerm: Action<{}, any>;
  setSearchResults: Action<{}, any>;
  setSearching: Action<{}, any>;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IButtonSchema {
  type: PageVariation;
  label: string;
  icon: ReactElement;
}
export enum PageVariation {
  favourites = 'favourites',
  search = 'search',
}

export enum PornFilter {
  yes = 'yes',
  no = 'no',
}
