import React from 'react';
import ReactDOM from 'react-dom';
import { ItemList, Header, Footer } from './components';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';

const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header />
            <ItemList />
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
