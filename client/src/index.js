import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./storage/UserStore";
import MaterialStore from "./storage/MaterialStore";
import SubjectStore from "./storage/SubjectStore";
import GroupStore from "./storage/GroupStore";
import CategoryStore from "./storage/CategoryStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Context.Provider value={{
          user: new UserStore(),
          material: new MaterialStore(),
          subject: new SubjectStore(),
          group: new GroupStore(),
          category: new CategoryStore()
      }}>

          <App/>
      </Context.Provider>
);
