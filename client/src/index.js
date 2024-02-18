import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./storage/UserStore";
import MaterialStore from "./storage/MaterialStore";

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

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
