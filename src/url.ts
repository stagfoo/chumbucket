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
const PARTY_PAGE = (ctx: Context, next: any) => {
  state.currentPage = {
    name: 'updateCurrentPage',
    value: 'PARTY'
  }
};

// Routes
page('/', HOME_PAGE);
page('/party', PARTY_PAGE);


export function startRouters(): void {
  page.start();
}

//Network Call
