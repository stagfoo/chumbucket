import { globalStyles } from './styles';
import { defaultState, reducers } from './store';
import { startRouters } from './url';
import { createStore } from 'obake.js';
import { html } from 'lit-element';
import './ui';

//Default render
document.body.querySelector('style').innerHTML = globalStyles;
document.body.querySelector('#app').innerHTML = html`<app-root></app-root>`.getHTML();
//Create Store
export const state = createStore(
    defaultState,
    renderer,
    reducers
  );
//Render Loop function
function renderer(newState) {
   (document.querySelector('app-root') as any).state = newState;
}
//Start Router listener
startRouters();
