import { LitElement, html, property, css, customElement } from 'lit-element';
import { handleGreetingClick } from './actions';
import { defaultState } from './store';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({
    hasChanged(value, oldValue) {
      console.log(value, oldValue);
      return true;
    }
  }) state = defaultState;

  handleClick() {
    handleGreetingClick()
  }
  createRenderRoot() {
    //render this component lightDOM
    return this;
  }
  routing(route) {
    return html`<h1>${route}</h1>`
  }
  render() {
    return html`<div class="container">
  <div class="row">
    <nav-bar></nav-bar>
    ${this.routing(this.state.currentPage.name)}
    <button @click=${this.handleClick}>(„ಡωಡ„)	Clambake</button>
     ${this.state.greeting}
  </div>
</div>`;
  }
}

@customElement('nav-bar')
export class NavBar extends LitElement {
  @property() routes = {
    'Home': '/',
    'Party': '/party'
  };

  static styles = css`
    ul,li {
      margin: 0;
      padding:0;
      display:inline-block;
    }
    a {
      padding: 1em;
    }
  `;
  render() {
    return html`
    <nav>
      <ul>${Object.keys(this.routes).map(name => {
      return html`<li><a href="${this.routes[name]}">${name}</a></li>`
      })}</ul>
    </nav>`;
  }
}
