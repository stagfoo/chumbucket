import { reducer } from 'obake.js';

export const defaultState = {
  bucket: '',
  currentPage: { name: 'HOME', activePage: "/" },
  notification: {
    text: "",
    show: false
  }
 }

 export const routes = {
    'Home': '/',
    'Example Fetch': '/example-fetch',
 }

 export const activePage = {
   "HOME": "/",
   "EXAMPLE_FETCH": "/example-fetch"
 }
export const reducers = {
  updateCurrentPage: reducer((state, value: string) => {
    state.currentPage = { name: value, activePage:activePage[value]  };
  }),
  updateBucket: reducer((state, value: string) => {
    state.bucket = value;
  }),
  updateNotification: reducer((state, value:{text: string, show: boolean}) => {
    state.notification = value;
  }),
}
