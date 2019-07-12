
export const defaultState = {
  greeting: '🌊🍖',
  currentPage: { name: 'HOME' }
 }

export const reducers = {
  updateCurrentPage: (state, propName, value) => {
    console.log('[updateCurrentPage]', state, propName, value)
    state.currentPage = { name: value };
    return new Promise(function(resolve, reject) { resolve(state) });
  },
  changeGreeting: (state, propName, value) => {
    console.log('[changeGreeting]', state, propName, value)
    state.greeting = value;
    return new Promise(function(resolve, reject) { resolve(state) });
  }
}
