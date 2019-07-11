import { LitElement, html, property,   customElement } from 'lit-element';
import { state } from './index';

@customElement('app-root')
export class AppRoot extends LitElement {
  state:any;
  constructor() {
    super();
    this.state = state;
  }
  static get properties() {
    return {
      state: { type: Object },
    };
  }
  handleClick(){
    console.log('Sent')
    console.log(this.state);
    state.greeting = {
      name: 'CHANGE_GREETING',
      value: 'More Clambake!'
    }
    console.log(this.state);
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
