
export const defaultState = {
  greeting: 'BoOOOoo!'
 }

export const reducers = {
  CHANGE_GREETING: (state, propName, value) => {
    //Do something to the state
    console.log(state, propName, value)
    state.greeting = value;
    return new Promise(function(resolve, reject) { resolve(state) });
  }
}
