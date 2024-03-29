import {handleButtonClick} from './actions';
import html from 'nanohtml';
import {ROUTES, Route, State} from './store';
import {STYLES, notificationStyle, DS} from './styles';

export function ui(state: State): HTMLElement {
	return html`
    <div id="app">
      ${navbar(state)}
      <div class="page">${routing(state)}</div>
      ${notification(state)}
    </div>
  `;
}

export function routing(state: State): HTMLElement {
	switch (state.currentPage) {
		case 'HOME':
			return html`
        <h1>currentPage: ${state.currentPage}</h1>
        <textarea>${state.bucket}</textarea>
        <button onclick=${handleButtonClick}>Add Meat 🍖</button>
      `;
		case 'EXAMPLE_FETCH':
			return html`
        <h1>currentPage: ${state.currentPage}</h1>
        <textarea>${state.bucket}</textarea>
        <button onclick=${handleButtonClick}>Add Meat 🍖</button>
      `;
		default:
			return html` <h1>404 CHUM</h1> `;
	}
}

export function navbar(state: State): HTMLElement {
	return html`
    <div class="nav">
      <div class="row">
        ${(Object.keys(ROUTES) as Route[]).map(name => {
		const isActive = state.currentPage === name;
		return html` <div class="${isActive ? 'active' : ''}">
            <a class="box" href="${ROUTES[name]}">${isActive ? '#' + name : name}</a>
          </div>`;
	})}
      </div>
    </div>
  `;
}

function notification(state: State): HTMLElement {
  STYLES.add('notificationStyle', notificationStyle(DS), window.document.createElement('style'), true);
	return html`
    <div class="notification ${state.notification.show ? 'show' : 'hide'}">
      ${state.notification.text}
    </div>
  `;
}
