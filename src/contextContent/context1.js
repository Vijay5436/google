import React, { Component } from "react";
import { TheamContext } from "../maicomponent/theamContext";

export default class context1 extends Component {
  static contextType = TheamContext;
  render() {
    console.log(this.context);
    const { isLightTheam, light, dark } = this.context;
    const theme = isLightTheam ? light : dark;
    return (
      <div style={{ backgroundColor: theme.ui, color: theme.syntax }}>
        <h1>hello World</h1>
        <ul>
          <li>kerala</li>
          <li>Tmail Nadu</li>
          <li>karnataka</li>
          <li>kerala</li>
          <li>kerala</li>
        </ul>
      </div>
    );
  }
}
