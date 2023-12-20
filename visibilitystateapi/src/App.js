import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { useVisibility } from './Custom Hook/useVisibility';

function App() {
  const [onpage,count] = useVisibility();
  console.log(onpage,count);
  return (
    <div className="App">
       {onpage && count !== 0  && count %2 === 0 && 
         <h1>User left {Math.floor(count/2)} times this page </h1>
       }

      </div>
  );
}

export default App;
