import React, { Component } from "react";
import Button from './button/button';

import '../styles/style.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Start Page</h1>
                <Button label="component to test" />
            </div>
        );
    }
}

export default App;