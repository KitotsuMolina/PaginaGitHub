import React from 'react';

import '../styles/App.scss';
import {Provider} from "react-redux";
import generateStore from "../redux/store/store";
import Prueba from "../components/pruebaComponent";

function App() {
  const store = generateStore();
  return (
      <Provider store={store}>
        <div className="App">
            <Prueba/>
        </div>
      </Provider>
  );
}

export default App;
