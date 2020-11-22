import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/EmilysCandy-Regular.ttf'
import fontSub from '../assets/fonts/FjallaOne-Regular.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: CandyFont;
    src: url(${font});
  }
  @font-face {
  font-family: Subtitulo;
  src: url(${fontSub});
}
  html {
    font-family: CandyFont;
    color: var(--black);
  }
  
  .subtitulos{
    font-family:Subtitulo;
    font-size:20px;
    color: var(--morado);
    
  }
   .heroText{
    font-family: CandyFont;
  }
  .features h2, .destacado {
    font-family: CandyFont;
    font-size:30px;
    color: var(--red);
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
     font-family: CandyFont;
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
