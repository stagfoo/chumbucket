import { globalStyles } from './styles';
import { defaultState, reducers } from './store';
import { createStore } from 'obake.js';
import {html, render} from 'lit-html';
import './ui';

//Styles
document.body.querySelector('style').innerHTML = globalStyles;
//Ui
function renderer() {
  render(html``, document.body.querySelector('#app'));
  render(html`<app-root></app-root>`, document.body.querySelector('#app'));

}
export const state = createStore(
    defaultState,
    renderer,
    reducers
  );
renderer();
