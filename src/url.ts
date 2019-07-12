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
    value: 'CLAMBAKE'
  }
};

// Routes
page('/', HOME_PAGE);

export function startRouters(): void {
  page.start();
}

//Network Call
