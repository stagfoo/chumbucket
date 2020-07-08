import { reducer } from 'obake.js';

export const defaultState = {
  greeting: '🍖',
  currentPage: { name: 'HOME' }
 }

 export const routes = {
    'Home': '/',
    'Another Page': '/another-page',
 }
 export const navbarIcons = {
  'Home': 'home',
  'Another Page': 'search',
 }

export const reducers = {
  updateCurrentPage: reducer((state, value) => {
    state.currentPage = { name: value };
  }),
  changeGreeting: reducer((state, value) => {
    state.greeting = value;
  }),
}
