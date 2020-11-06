import React from 'react';
import {TestJsonFetch} from "./TestJsonFetch";


function App() {
  return (
    <div className="App">
        <TestJsonFetch url="http://localhost:7070/data"/>
        <TestJsonFetch url="http://localhost:7070/error"/>
        <TestJsonFetch url="http://localhost:7070/loading"/>
    </div>
  );
}

export default App;
