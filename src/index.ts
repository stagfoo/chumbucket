import {reducers, defaultState, State} from './store';
import {startRouters} from './url';
import {createStore} from 'obake.js';
import {ui} from './ui';
import {baseStyles} from './styles';
import morph from 'nanomorph';

// Default render
const ROOT_NODE = document.body.querySelector('#app');

// Create Store
export const state:State = createStore(
	defaultState,
	{renderer},
	reducers,
);

// Render Loop function
// spec - https://dom.spec.whatwg.org/#concept-node-equals
function renderer(newState: State) {
	morph(ROOT_NODE, ui(newState), {
		onBeforeElUpdated: (fromEl: HTMLElement, toEl: HTMLElement) => !fromEl.isEqualNode(toEl),
	});
}

// Start Router listener
startRouters();
baseStyles();

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js').then(
			registration => {
				console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
			},
			error => {
				console.log(`ServiceWorker registration failed: ${error}`);
			},
		);
	});
}
