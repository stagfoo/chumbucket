import { handleGreetingClick } from './actions';
import html from 'nanohtml';
import {routes } from './store';
import { notificationStyle } from 'styles';

export function AppRoot(state) {
  return html`
  <div id="app">
      ${navbar(state)}
      <div class="page">
        ${routing(state)}
      </div>
      ${notification(state)}
    </div>
  `
}

export function routing(state) {
  switch (state.currentPage.name) {
    case "HOME":
      return html`
        <h1>Chumbucket</h1>
        <textarea>(ノ-◇-)ノ ${state.greeting}</textarea>
        <button onclick=${handleGreetingClick}>Chum the water</button>
    `
    case "EXAMPLE_FETCH":
      return html`
      <h1>Fetching no?</h1>
        <textarea>（*＾3＾）/～      ${state.greeting}</textarea>
        <button onclick=${handleGreetingClick}>Feed the Sharks</button>
    `
    default:
    return html`
       <h1>404 CHUM</h1>
  `
  }
}
export function navbar(state) {
  return html`
  <div class="nav">
  <ul class="row start-xs">${Object.keys(routes).map(name => {
          const isActive = state.currentPage.activePage === routes[name];
          const activeText = isActive ? "#"+name : name
          return html`
          <li class="${isActive? "active": ""}">
            <a class="box" href="${routes[name]}">${activeText}</a>
          </li>`
        })}</ul>
        </div>
      `;
}

function notification(state){
  notificationStyle()
  return html`
    <div class="notification ${state.notification.show? "show": "hide"}">
      ${state.notification.text}
    </div>
  `
}