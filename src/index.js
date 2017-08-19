import React from 'react';
import ReactDOM from 'react-dom';
import { ItemList, Footer, NotFound } from './components';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), applyMiddleware(thunk, historyMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={ItemList}/>
                    <Route path="/pokemon/:Id" component={ItemList}/>
                    <Route component={NotFound}/>
                </Switch>
            </ConnectedRouter>
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
