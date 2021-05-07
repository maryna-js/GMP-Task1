import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../src/reducers/rootReducer";

import App from '../src/components/App'
import '../styles/index.scss'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.default)));

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <App {...pageProps} />
        </Provider>
    )
}