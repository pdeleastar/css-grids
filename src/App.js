import React, { Component } from "react";

import { grid, header, chart, news, keystats, overview, footer, Item } from "./grid";

class App extends Component {
  render() {
    return (
      <div className={grid}>
        <Item className={header}>Search</Item>
        <Item className={chart}>Chart</Item>
        <Item className={news}>News</Item>
        <Item className={keystats}>Keystats</Item>
        <Item className={overview}>Overview</Item>
        <Item className={footer}>Footer</Item>
      </div>
    );
  }
}

export default App;
