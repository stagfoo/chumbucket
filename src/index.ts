import { defaultState, reducers } from './store';
import { startRouters } from './url';
import { createStore } from 'obake.js';
import { AppRoot } from './ui';
import morphdom from 'morphdom';

//Default render
const ROOT_NODE = document.body.querySelector('#app');

//Create Store
export const state = createStore(
    defaultState,
    { renderer: renderer },
    reducers
  );
//Render Loop function
function renderer(newState) {
   morphdom(ROOT_NODE, AppRoot(newState), {
    onBeforeElUpdated: function(fromEl, toEl) {
        if (fromEl.isEqualNode(toEl)) {
            return false
        }
        return true
    }
  })
}
//Start Router listener
startRouters();
