import { state } from './index';

export function handleGreetingClick() {
  state.greeting = {
    name: 'changeGreeting',
    value: state.greeting + '🍖'
  }
};
