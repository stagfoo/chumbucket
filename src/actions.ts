import { state } from './index';

export function handleGreetingClick() {
  state._update('updateGreeting', state.greeting + '🍖')
};
