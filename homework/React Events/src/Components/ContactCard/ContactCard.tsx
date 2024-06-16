import { useEffect, useState } from "react";

const ContactCard = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    if (id > 0) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [id]);

  const handlePrev = () => {
    setId((id) => id - 1);
  };

  const handleNext = () => {
    setId((id) => id + 1);
  };

  console.log(id);
  return (
    <div>
      <button onClick={handlePrev} disabled={id === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={id === 10}>
        Next
      </button>
      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.username}</p>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
