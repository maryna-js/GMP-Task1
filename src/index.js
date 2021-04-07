import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

import App from "./components/App.js";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.default)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));