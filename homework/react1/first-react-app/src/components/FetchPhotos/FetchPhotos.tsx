import { useState } from "react";

const FetchPhotos = () => {
  const [data, setData] = useState([]);
  const renderPhotos = () => {
    if (data.length === 0) {
      fetch("http://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => {
          setData(data.slice(0, 4));
        });
    } else {
      setData([]);
    }
  };

  return (
    <div>
      <img src="" alt="" />
      <button onClick={renderPhotos}>Fetch Photos</button>
      <div className="photos-container">
        {data.map((photo, key) => (
          <img src={[photo.url]} alt="" key={key} />
        ))}
      </div>
    </div>
  );
};

export default FetchPhotos;
