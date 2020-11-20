import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/EmilysCandy-Regular.ttf'
import font2 from '../assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  @font-face {
  font-family: fontBody;
  src: url(font2);
}
  html {
    font-family: FrenchFries;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6,label {
    font-family:fontBody;
    
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
     font-family: FrenchFries;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`

export default Typography
