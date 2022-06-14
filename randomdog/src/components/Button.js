import { useState } from "react";

function Button({ dog }) {
  const [dogData, setDogData] = useState({
    searchDog: "",
  });

  const handleChange = (event) => {
    setDogData({ ...dogData, [event.target.message]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dog(dogData.searchDog);
  };

  return (
    <div>
      <button onSubmit={handleSubmit}>
        <input
          type="submit"
          name="searchDog"
          onChange={handleChange}
          value="Random Dog"
        />
      </button>
    </div>
  );
}

export default Button;
