import joro from 'joro';

export const DS = {
  fontFamily: {
    default: "Fira Mono, san-serif",
    alt: "'Staatliches', san-serif",
  },
  fontSizes: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,

  },
  gutters: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  colors: {
    purple: "#8D58FD",
    blue: "#58D5FD",
    green: "#83FD58",
    yellow: "#FDD758"
  }
}

export const STYLES = new joro();


function buttonStyle(){
  return `
  background: ${DS.colors.yellow};
  color:  ${DS.colors.purple};
  box-sizing: border-box;
  font-size: ${DS.fontSizes.lg}px;
  padding: ${DS.gutters.md}px;
  border: 0;
  text-decoration: none;
  `
}
export function notificationStyle(){
  STYLES.add("notificationStyle", `
  .notification {
    background: #fff;
    box-shadow: ${DS.gutters.sm}px ${DS.gutters.sm}px 0px #000;
    position:fixed;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    font-size: ${DS.fontSizes.md}px;
    padding: ${DS.gutters.md}px;
    width: 320px;
    text-align:center;
    transition: ease all 0.3s;
    bottom: -10vh;
    height: 0px;
    }
    .notification.show {
      transition: ease all 0.3s;
      bottom: ${DS.gutters.lg}px;
      height: auto;
    }
  `)
}

export function BaseStyles() {
  STYLES.add("baseStyles", `
    html,body {
      margin: 0;
      padding: 0;
      background: ${DS.colors.purple};
      color:  ${DS.colors.blue};
      opacity: 1;
    }
    textarea,
    button {
      display: block;
      clear:both;
      width: 100%;
      margin: ${DS.gutters.sm}px auto ${DS.gutters.sm}px auto;
      ${buttonStyle()}
    }
    textarea {
      width: 100%;
      min-height: 300px;
      background: ${DS.colors.blue};
      font-size: ${DS.fontSizes.xl}px;
    }
    .nav {
      margin-top: ${DS.gutters.xl}px;
    }
    .nav li {
      display:inline-block;
    }
    .nav li.active a {
      background: ${DS.colors.green};
      color:  ${DS.colors.purple};
    }
    .nav li a {
      ${buttonStyle()}
      margin-right: ${DS.gutters.sm}px;
    }
    @keyframes notification {
      from {bottom: -120vh;}
      to { bottom: 5vh; }
    }
    @keyframes notification-out {
      to {bottom: -5vh; display:none;}
      from {bottom: 5vh; display:block;}
    }
  `)
}