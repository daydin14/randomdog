import { useState, useEffect } from "react";
import Button from "./components/Button";
import DogDisplay from "./components/RandomDogDisplay";
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
      <Button />
      <DogDisplay />
    </div>
  );
}

export default App;
