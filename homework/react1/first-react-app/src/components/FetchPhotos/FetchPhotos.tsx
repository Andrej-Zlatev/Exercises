import { useState } from "react";
import Photos from "../Photos/Photos";

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
      {data.map((photo, key) => (
        <Photos url={photo.url} title={photo.title} key={key}></Photos>
      ))}
    </div>
  );
};

export default FetchPhotos;
