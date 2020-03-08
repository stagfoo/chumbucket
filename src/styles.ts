import Fairybread from 'fairybread';

export const DS = {
  fontFamily: {
    default: "Sen, san-serif",
    alt: "Staatliches, san-serif",
  },
  fontSizes: {
    sm: 8,
    md: 16,
    lg: 24,
  },
  gutters: {
    sm: 8,
    md: 16,
    lg: 24,
  },
  colors: {
    blue: "#58D5FD",
    green: "#79E35E",
  }
}

export const REQUIRED_STYLES = new Fairybread().css`
  html,body {
    overflow: scroll;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  body {
    transition: 0.3s ease all;
  }
  #app {
    margin: 0 auto;
    overflow:hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: 960px;
  }
  .page {
    height: 90vh;
    padding-top: ${DS.gutters.md}px;
    padding-left: ${DS.gutters.md}px;
    padding-right: ${DS.gutters.md}px;
    overflow-y: scroll;
  }
  button {
    border: 0;
    padding: ${DS.gutters.sm}px;
    font-size: 1em;
    font-family: ${DS.fontFamily.alt};
    background: ${DS.colors.blue};
    border-radius: 8px;
  }

  nav a {
    padding-bottom: ${DS.gutters.lg}px;
    padding-top: ${DS.gutters.lg}px;
    text-align: center;
    display:block;
  }

`
