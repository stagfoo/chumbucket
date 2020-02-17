//your JSS styles
export const simpleGrid = `
/**
*** SIMPLE GRID
*** (C) ZACH COLE 2016 (stripped)
**/

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  font-size: 100%;
  transition: opacity ease 0.3s;
}

/* ROOT FONT STYLES */

* {
  font-family: 'Arial', Helvetica, sans-serif;
  color: #333447;
  line-height: 1.5;
}



/* ==== GRID SYSTEM ==== */

.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.row {
  position: relative;
  width: 100%;
}

.row [class^="col"] {
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  width: 96%;
}

.col-1-sm {
  width: 4.33%;
}

.col-2-sm {
  width: 12.66%;
}

.col-3-sm {
  width: 21%;
}

.col-4-sm {
  width: 29.33%;
}

.col-5-sm {
  width: 37.66%;
}

.col-6-sm {
  width: 46%;
}

.col-7-sm {
  width: 54.33%;
}

.col-8-sm {
  width: 62.66%;
}

.col-9-sm {
  width: 71%;
}

.col-10-sm {
  width: 79.33%;
}

.col-11-sm {
  width: 87.66%;
}

.col-12-sm {
  width: 96%;
}

.row::after {
	content: "";
	display: table;
	clear: both;
}

.hidden-sm {
  display: none;
}

@media only screen and (min-width: 33.75em) {  /* 540px */
  .container {
    width: 80%;
  }
}

@media only screen and (min-width: 45em) {  /* 720px */
  .col-1 {
    width: 4.33%;
  }

  .col-2 {
    width: 12.66%;
  }

  .col-3 {
    width: 21%;
  }

  .col-4 {
    width: 29.33%;
  }

  .col-5 {
    width: 37.66%;
  }

  .col-6 {
    width: 46%;
  }

  .col-7 {
    width: 54.33%;
  }

  .col-8 {
    width: 62.66%;
  }

  .col-9 {
    width: 71%;
  }

  .col-10 {
    width: 79.33%;
  }

  .col-11 {
    width: 87.66%;
  }

  .col-12 {
    width: 96%;
  }

  .hidden-sm {
    display: block;
  }
}

@media only screen and (min-width: 60em) { /* 960px */
  .container {
    width: 75%;
    max-width: 60rem;
  }
}
`

export function button(key) {
  switch (key) {
    case 'hover':
      return `
        box-shadow: none;
      `
    case 'active':
      return `
        background-color: yellow;
      `
    default:
      return `
      font-size: 16px;
      border-radius: 3px;
      background-color: lightgrey;
      border: 1px solid grey;
      box-shadow: 2px 2px teal;
      cursor: pointer;
    `;
  }
}

export const globalStyles = `
${simpleGrid}

button { ${button('default')} }
button:hover { ${button('hover')} }
button:active { ${button('active')} }

ul,li {
  margin: 0;
  padding:0;
  display:inline-block;
}
li {
  margin-bottom: 5px;
}

a {
  padding: 1em;
}

footer {
  margin-top: 50px;
  padding-top: 25px;
  border-top: 1px solid lightgrey;
}
`
