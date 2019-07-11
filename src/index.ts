import { globalStyles } from './styles';
import { defaultState, reducers } from './store';
import { startRouters } from 'input';
import { createStore } from 'obake.js';
import {html, render} from 'lit-html';
import './ui';

//Default render
document.body.querySelector('style').innerHTML = globalStyles;
render(html`<app-root></app-root>`, document.body.querySelector('#app'));
//Render Loop
export const state = createStore(
    defaultState,
    renderer,
    reducers
  );
function renderer(newState) {
   (document.querySelector('app-root') as any).state = newState;
}
startRouters();
