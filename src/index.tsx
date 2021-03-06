import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import generateStore from "redux/store/store";
import "primeicons/primeicons.css"
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"
import "styles/scss/Main.sass"
const store = generateStore();
ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
