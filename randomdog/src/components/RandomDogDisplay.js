function DogDisplay({ dog }) {
  const loaded = () => {
    return (
      <div>
        <img src={dog.message} alt="Dog" />
      </div>
    );
  };

  const loading = () => {
    return (
      <div>
        <h1>Loading ... Something Went Wrong!</h1>
      </div>
    );
  };

  return dog ? loaded() : loading();
}

export default DogDisplay;
