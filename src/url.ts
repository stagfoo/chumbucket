import page from 'page';
import { state } from './index';

type Context = {
  params: {
    name?: string;
  };
};

// Handlers
const HOME_PAGE = (ctx: Context, next: any) => {
  state.currentPage = {
    name: 'updateCurrentPage',
    value: 'HOME'
  }
};
const ANOTHER_PAGE = (ctx: Context, next: any) => {
  getData('chum').then(data => {
    state.greeting = {
      name: 'changeGreeting',
      value: data.greeting
    }
  })
  state.currentPage = {
    name: 'updateCurrentPage',
    value: 'ANOTHER'
  }
};

// Routes
page('/', HOME_PAGE);
page('/another-page', ANOTHER_PAGE);


export function startRouters(): void {
  page.start();
}

//Network Call
const API = {
  JSON: window.location.origin
}
export async function getData(name: string) {
  const resp = await fetch(`${API.JSON}/data.json`);
  if (resp.ok) {
    return resp.json();
  } else throw new TypeError('getData response is not Ok');
}
