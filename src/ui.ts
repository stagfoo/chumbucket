import { handleGreetingClick } from './actions';
import html from 'nanohtml';
import {routes, navbarIcons } from './store';

export function AppRoot(state) {
  return html`
  <div id="app">
      ${navbar()}
      <div class="page">
        ${routing(state)}
      </div>
    </div>
  `
}

export function routing(state) {
  switch (state.currentPage.name) {
    case "HOME":
      return html`
        <h1>Chumbucket</h1>
        <textarea>(ノ#-◇-)ノ ${state.greeting}</textarea>
        <button onclick=${handleGreetingClick}>Chum the water</button>
    `
    default:
      return html`
        <h1>${state.currentPage.name}</h1>
        <h2>${state.greeting}</h2>
    `
  }
}
export function navbar() {
  return html`
  <div class="nav">
  <ul class="row start-xs">${Object.keys(routes).map(name => {
          return html`<li class="col-xs"><a class="box" href="${routes[name]}">${icon(navbarIcons[name])}</a></li>`
        })}</ul>
        </div>
      `;
}

export function icon(type){
  return html`
    <i class="large material-icons">${type}</i>
  `
}