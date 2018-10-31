import { css } from "react-emotion";
import styled from "react-emotion";

const fullScreen = 1280
const tablet = 1280
const mobile = 768

const fullScreenMargin = 8
const tabletMargin = 5
const mobileMargin = 2

const grid = css`
  display: grid;
  grid-gap: 0.5vh;
  grid-template-rows: 15vh 40vh 30vh 10vh;

  @media (min-width: ${fullScreen}px) {
    grid-template-areas:
    "h h h h h h"
    "c c c c n n"
    "k k k k o o"
    "f f f f f f";
    margin: 1.5vh ${fullScreenMargin}vh 1.5vh ${fullScreenMargin}vh;
  };
  @media (max-width: ${tablet}px) {
    grid-template-areas:
    "h h h h h h"
    "c c c c c c"
    "k k o o n n"
    "f f f f f f";
    margin: 1.5vh ${tabletMargin}vh 1.5vh ${tabletMargin}vh;
  };
  @media (max-width: ${mobile}px) {
    grid-template-areas:
    "h h h h h h"
    "c c c c c c"
    "k k k k k k"
    "n n n o o o"
    "f f f f f f";
    margin: 1.5vh ${mobileMargin}vh 1.5vh ${mobileMargin}vh;
  };
`;

const header = css`
  grid-area: h;
`;

const chart = css`
  grid-area: c;
`;

const news = css`
  grid-area: n;
`;

const keystats = css`
  grid-area: k;
`;

const overview = css`
  grid-area: o;
`;

const footer = css`
  grid-area: f;
`;

const Item = styled("div")`
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: black;
  background-color: #dededf;
  border: 3px solid #f08c00;
  border-radius: 5px;
  padding: 3px;
`;

export { grid, header, chart, news, keystats, overview, footer, Item };
