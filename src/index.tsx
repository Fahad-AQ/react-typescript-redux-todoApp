import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import {store} from './store/index';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
injectTapEventPlugin();


ReactDOM.render(
   <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);