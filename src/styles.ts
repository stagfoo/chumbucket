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
    green: "#79E35E",
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
  `
}

export function BaseStyles() {
  STYLES.add("baseStyles", `
    html,body {
      margin: 0;
      padding: 0;
      background: ${DS.colors.purple};
      color:  ${DS.colors.blue};
    }
    textarea,
    button {
      display: block;
      clear:both;
      margin: ${DS.gutters.sm}px auto ${DS.gutters.sm}px auto;
      ${buttonStyle()}
    }
    body {
      opacity: 1;
    }
    textarea {
      width: 100%;
      min-height: 300px;
      font-size: ${DS.fontSizes.xl}px;
    }
  `)
}