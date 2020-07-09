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
  }
}

export const STYLES = new joro();


function buttonStyle(){
  return `
  background: ${DS.colors.blue};
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
    box-shadow: 10px 10px 0px #000;
    position:fixed;
    font-size: ${DS.fontSizes.md}px;
    padding: ${DS.gutters.md}px;
    width: 320px;
    text-align:center;
    transition: ease all 0.3s;
    animation-name: notification;
    animation-duration: 0.3s;
    bottom: 5vh;
    }
  .notification.hide {
    animation-name: notification-out;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
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
      margin: ${DS.gutters.sm}px auto ${DS.gutters.sm}px auto;
      ${buttonStyle()}
    }
    textarea {
      width: 100%;
      min-height: 300px;
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