import { state } from './index';

export function handleGreetingClick() {
  state._update('changeGreeting', state.greeting + '🍖')
};
