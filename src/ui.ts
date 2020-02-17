// import { LitElement, html, property, css, customElement } from 'lit-element';
import { handleGreetingClick } from './actions';
import html from 'nanohtml';

export function AppRoot(state) {
  console.log(state)
  return html`
  <div id="app">
    <div class="container">
     <div class="row">
      ${navbar(state)}
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
export function navbar(state) {
  const routes = {
    'home': '/',
    'Another Page': '/another-page',
  }
  const css = html`
    <style>
      ul,li {
       margin: 0;
       padding:0;
       display:inline-block;
     }
     a {
       padding: 1em;
     }
    </style>
  `
  //add fairybread
  return html`
       <nav>
         ${css}
         <ul>${Object.keys(routes).map(name => {
          return html`<li><a href="${routes[name]}">${name}</a></li>`
        })}</ul>
        </nav>
      `;
}
