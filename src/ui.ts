// import { LitElement, html, property, css, customElement } from 'lit-element';
import { handleGreetingClick } from './actions';
import html from 'nanohtml';
import {routes } from './store';

export function AppRoot(state) {
  return html`
  <div id="app">
    <div class="container">
     <div class="row">
      ${navbar()}
      ${routing(state)}
    </div>
    </div>
    </div>
  `
}

export function routing(state) {
  switch (state.currentPage.name) {
    case "HOME":
      return html`
                   <h1>${state.currentPage.name}</h1>
                   <h2>${state.greeting}</h2>
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
       <nav>
         <ul>${Object.keys(routes).map(name => {
          return html`<li><a href="${routes[name]}">${name}</a></li>`
        })}</ul>
        </nav>
      `;
}
