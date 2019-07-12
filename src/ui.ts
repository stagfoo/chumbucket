import { LitElement, html, property,   customElement } from 'lit-element';
import { handleGreetingClick } from './actions';
import { defaultState } from './store';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({
    hasChanged(value, oldValue){
      console.log(value, oldValue);
      return true;
    }
  }) state = defaultState;

  handleClick() {
    handleGreetingClick()
  }
  render() {
    return html`<div @click=${this.handleClick} >
      <simple-greeting name="(„ಡωಡ„)	Clambake"></simple-greeting>
      ${this.state.greeting}
    </div>`;
  }
}

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';
  render() {
    return html`<h1>Hello, ${this.name}!</h1>`;
  }
}
