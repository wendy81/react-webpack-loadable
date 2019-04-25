import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'RouterLazy';
import MyErrorBoundary from './myErrorBoundary';
import { BrowserRouter as Router } from "react-router-dom";
import { StoreContext } from "redux-react-hook";
import {Provider} from 'react-redux';
import stores from "./redux/config-store";

const Index = () => (
    <StoreContext.Provider value={stores.store}>
        <Provider store={stores.storeform}>
            < Router >
                <MyErrorBoundary>
                    <App />
                </MyErrorBoundary>
            </Router >
        </Provider>
    </StoreContext.Provider >
)

ReactDOM.render(<Index />, document.getElementById('root'));