import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
// App class that inherits React Component class and renders view to browser
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <HomePage />
            </div>
        );
    }
}


// render the app in its corresponding div element
const appDiv = document.getElementById("app");
render(<App />, appDiv);