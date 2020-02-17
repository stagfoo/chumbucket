import { reducer } from 'obake.js';

export const defaultState = {
  greeting: '🌊🍖',
  currentPage: { name: 'HOME' }
 }

export const reducers = {
  updateCurrentPage: reducer((state, value) => {
    state.currentPage = { name: value };
  }),
  changeGreeting: reducer((state, value) => {
    state.greeting = value;
  }),
}
