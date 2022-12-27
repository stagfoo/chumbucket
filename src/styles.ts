import Joro from 'joro';

type DesignSystem = { fontFamily?: { default: string; alt: string; }; fontSizes: any; gutters: any; colors: any; };
export const DS = {
	fontFamily: {
		default: 'monospace',
		alt: 'sans-serif',
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
  //TODO new palette
	colors: {
		black: '#000000',
		white: '#ffffff',
		gray: '#424242',
		purple: '#7E4FED',
		lime: '#C8FF04',
		pink: '#FF6EBD',
		blue: '#04E1FF',
		green: '#15DA2A',
	},
};

export const STYLES = new Joro();

function buttonStyle() {
	return `
  background: ${DS.colors.white};
  color:  ${DS.colors.black};
  box-sizing: border-box;
  padding: ${DS.gutters.md}px;
  border: 2px solid ${DS.colors.black};
  text-decoration: none;
  font-family: ${DS.fontFamily?.default};
  `;
}

export function notificationStyle(DS:DesignSystem) {
  return `
  .notification {
    background: #fff;
    box-shadow: ${DS.gutters.sm}px ${DS.gutters.sm}px 0px ${DS.colors.black};
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
  `;
}

export function baseStyles(DS:DesignSystem) {
	return `
    html,body {
      margin: 0;
      padding: 0;
      background: ${DS.colors.lime};
      color:  ${DS.colors.black};
      opacity: 1;
      font-family: ${DS.fontFamily?.default};
      padding: ${DS.gutters.sm}px;
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
      font-size: ${DS.fontSizes.xl}px;
    }
    h1 {
      display:block;
      font-weight: normal;
    }
    .nav .row {
      display:block;
      overflow:hidden;
    }
    .nav div {
      display:inline-block;
    }
    .nav .row div.active a {
      background: ${DS.colors.black};
      color:  ${DS.colors.lime};
    }
    .nav > div a {
      ${buttonStyle()}
      margin-right: ${DS.gutters.sm}px;
      display:block;
    }
    @keyframes notification {
      from {bottom: -120vh;}
      to { bottom: 5vh; }
    }
    @keyframes notification-out {
      to {bottom: -5vh; display:none;}
      from {bottom: 5vh; display:block;}
    }
  `;
}
