import { reducer } from 'obake.js';

type Notification = {
  text: string,
  show: boolean
}

export type Route = "HOME" | "EXAMPLE_FETCH"
export type State = {
  bucket: string,
  currentPage: Route,
  notification: Notification,
  _update:(reducerName: string, data:any) => Promise<State>
}


export const defaultState: Omit<State, '_update'> = {
  bucket: '',
  currentPage: 'HOME',
  notification: {
    text: "",
    show: false
  }
 }

 export const ROUTES = {
    'HOME': '/',
    'EXAMPLE_FETCH': '/example-fetch',
 }

export const reducers = {
  updateCurrentPage: reducer((state: State, value: Route) => {
    state.currentPage = value;
  }),
  updateBucket: reducer((state: State, value: string) => {
    state.bucket = value;
  }),
  updateNotification: reducer((state: State, value:{text: string, show: boolean}) => {
    state.notification = value;
  }),
}
