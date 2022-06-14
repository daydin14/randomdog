import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const apiKey = "https://dog.ceo/api/breeds/image/random";
  const [dog, setDog] = useState(null);

  const getDog = async () => {
    const response = await fetch(`${apiKey}`);
    const dogData = await response.json();
    setDog(dogData);
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
