import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./storage/UserStore";
import MaterialStore from "./storage/MaterialStore";
import {Navbar} from "react-bootstrap";
import NavBar from "./components/NavBar";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{
          user: new UserStore(),
          material: new MaterialStore(),
      }}>

          <App/>
      </Context.Provider>
  </React.StrictMode>
);
