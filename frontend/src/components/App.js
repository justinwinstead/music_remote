import React, { Component } from "react";
import { render } from "react-dom";

// App class that inherits React Component class and renders view to browser
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Testing React Code</h1>;
    }
}


// render the app in its corresponding div element
const appDiv = document.getElementById("app");
render(<App/>, appDiv);