import { reducers, defaultState } from './store';
import { startRouters } from './url';
import { createStore } from 'obake.js';
import { AppRoot } from './ui';
import { BaseStyles  } from './styles';
import morph from 'nanomorph';

//Default render
const ROOT_NODE = document.body.querySelector('#app');

//Create Store
export const state = createStore(
    defaultState,
    { renderer },
    reducers
  );

//Render Loop function
// spec - https://dom.spec.whatwg.org/#concept-node-equals
function renderer(newState) {
  morph(ROOT_NODE, AppRoot(newState), {
    onBeforeElUpdated: (f, i) => !f.isEqualNode(i)
  })
}
//Start Router listener
startRouters();
BaseStyles();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(
          registration => {
              console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
          },
          error => {
              console.log(`ServiceWorker registration failed: ${error}`);
          }
      );
  });
}
