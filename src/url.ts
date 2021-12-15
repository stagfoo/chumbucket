import page from 'page';
import { state } from './index';
import { hideNotifications, showNotifications } from './actions';

// Handlers
const HOME_PAGE = (ctx, next) => {
  state._update('updateCurrentPage', 'HOME')
};
const EXAMPLE_FETCH = (ctx, next) => {
  getData(window.location.origin + "/data.json").then(data => {
    state._update('updateBucket', data.greeting)
    state._update('updateCurrentPage', 'EXAMPLE_FETCH')
    showNotifications("Shark data loaded  (´ε｀ )♡")
    hideNotifications(1000)
  })
};

// Routes
page('/', HOME_PAGE);
page('/example-fetch', EXAMPLE_FETCH);


export function startRouters(): void {
  page.start();
}

//Network Call
export async function getData(url: string) {
  const resp = await fetch(url);
  if (resp.ok) {
    return resp.json();
  } else throw new TypeError('getData response is not Ok');
}
