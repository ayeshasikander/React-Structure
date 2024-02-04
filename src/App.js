import React, { useState, useEffect } from 'react';
import Routing from './navigation/Routing';
import Loading from './components/loaders/Loading';

function App() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoad ? <Loading /> : <Routing />}
    </div>
  );
}

export default App;
