import { useState } from "react";

function Button({ dog }) {
  const [dogData, setDogData] = useState({
    searchDog: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    dog(dogData.searchDog);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Random Dog</button>
    </div>
  );
}

export default Button;
