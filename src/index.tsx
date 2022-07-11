import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import App from './App';
import reducers from "./store/store"
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const middleWare = applyMiddleware(thunk)
const store = createStore(reducers, middleWare)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Suspense fallback="loading...">
    <Provider store={store}>
      <App/>
    </Provider>
  </React.Suspense>
);

reportWebVitals();
