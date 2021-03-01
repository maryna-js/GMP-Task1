import React, { Component } from "react";
import Header from './header';
import SearchPanel from './search';
import SearchResults from './results';
import Footer from './footer';
import ErrorBoundary from './error-boundary';
import '../styles/style.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
                <ErrorBoundary>
                    <Header />
                    <SearchPanel />
                    <SearchResults />
                    <Footer />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;