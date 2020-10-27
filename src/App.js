import React from "react";
import Todo from "./components/Todo";
import { Provider } from 'react-redux';
import Store from  './Redux/Store';

function App() {
  
  return (
    <>
    <Provider store={Store}>
      <Todo />
    </Provider>
   </>
  );
}

export default App;
