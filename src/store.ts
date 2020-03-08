import { reducer } from 'obake.js';

export const defaultState = {
  greeting: '🌊🍖',
  currentPage: { name: 'HOME' }
 }

 export const routes = {
    'Home': '/',
    'Another Page': '/another-page',
    'Another Page1': '/another-page',
    'Another Page2': '/another-page',
    'Another Page3': '/another-page',
 }
 export const navbarIcons = {
  'Home': 'home',
  'Another Page': 'search',
  'Another Page1': 'add_circle',
  'Another Page2': 'notifications',
  'Another Page3': 'person',
 }

export const reducers = {
  updateCurrentPage: reducer((state, value) => {
    state.currentPage = { name: value };
  }),
  changeGreeting: reducer((state, value) => {
    state.greeting = value;
  }),
}
