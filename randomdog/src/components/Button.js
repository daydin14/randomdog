import { useState } from "react";

function Button({ dog }) {
  const [dogData, setDogData] = useState({});

  const handleChange = (event) => {
    setDogData({ ...dogData, [event.target.message]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dog(dogData.useState());
  };

  return (
    <div>
      <button onClick={handleSubmit}>
        <input type="text" onChange={handleChange} value={dogData.useState()} />
      </button>
    </div>
  );
}

export default Button;
