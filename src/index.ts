import { reducers } from './store';
import { startRouters } from './url';
import { hydrateState, dehydrateState} from 'utils'
import { createStore } from 'obake.js';
import { AppRoot } from './ui';
import { BaseStyles  } from './styles';
import morph from 'nanomorph';

//Default render
const ROOT_NODE = document.body.querySelector('#app');

//Create Store
const defaultState = hydrateState()
export const state = createStore(
    defaultState,
    {
      renderer,
      dehydrateState
    },
    reducers
  );

//Render Loop function
function renderer(newState) {
  morph(ROOT_NODE, AppRoot(newState), {
    onBeforeElUpdated: function(fromEl, toEl) {
        // spec - https://dom.spec.whatwg.org/#concept-node-equals

        if (fromEl.isEqualNode(toEl)) {
            return false
        }
        return true
    }
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
