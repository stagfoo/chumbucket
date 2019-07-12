import { LitElement, html, property, css, customElement } from 'lit-element';
import { handleGreetingClick } from './actions';
import { defaultState } from './store';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({
    hasChanged(value, oldValue) {
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
    switch (route) {
      case 'HOME':
        return html`
            <h1>${route}</h1>
            <h2>${this.state.greeting}</h2>
            <button @click=${this.handleClick}>Chum the water </button>
        `
      default:
        return html`
          <h1>${route}</h1>
          <h2>${this.state.greeting}</h2>
        `
        break;
    }
  }
  render() {
    return html`<div class="container">
  <div class="row">
    <nav-bar></nav-bar>
    ${this.routing(this.state.currentPage.name)}
  </div>
</div>`;
  }
}

@customElement('nav-bar')
export class NavBar extends LitElement {
  @property() routes = {
    'Home': '/',
    'Another Page': '/another-page'
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
