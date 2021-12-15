import { handleButtonClick } from "./actions";
import html from "nanohtml";
import { routes } from "./store";
import { notificationStyle } from "styles";

export function AppRoot(state) {
  return html`
    <div id="app">
      ${navbar(state)}
      <div class="page">${routing(state)}</div>
      ${notification(state)}
    </div>
  `;
}

export function routing(state) {
  switch (state.currentPage.name) {
    case "HOME":
      return html`
        <h1>${state.currentPage.name}</h1>
        <textarea>${state.bucket}</textarea>
        <button onclick=${handleButtonClick}>Add Meat 🍖</button>
      `;
    case "EXAMPLE_FETCH":
      return html`
        <h1>${state.currentPage.name}</h1>
        <textarea>${state.bucket}</textarea>
        <button onclick=${handleButtonClick}>Add Meat 🍖</button>
      `;
    default:
      return html` <h1>404 CHUM</h1> `;
  }
}
export function navbar(state) {
  return html`
    <div class="nav">
      <ul class="row start-xs">
        ${Object.keys(routes).map((name) => {
          const isActive = state.currentPage.activePage === routes[name];
          return html` <li class="${isActive ? "active" : ""}">
            <a class="box" href="${routes[name]}">${isActive ? "#" + name : name}</a>
          </li>`;
        })}
      </ul>
    </div>
  `;
}

function notification(state) {
  notificationStyle();
  return html`
    <div class="notification ${state.notification.show ? "show" : "hide"}">
      ${state.notification.text}
    </div>
  `;
}
