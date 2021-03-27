import React, { useState } from 'react';
import Card from './component/card';
import './App.css';
import Form from './component/form';
import { DataContext } from './Contexts/DataContext';
function App() {
  const [estimate, setEstimate] = useState(0);
  const [budget, setBudget] =
    useState(0);
  return (
    <div className="App">
      <DataContext.Provider value={{ estimate, setEstimate, budget, setBudget }}>
        <Card />
        <Form />
      </DataContext.Provider>

    </div>
  );
}

export default App;
