import Place from "../Place/Place";
import data from "../../db.json";

const PlacesContainer = () => {
  return (
    <div className="places-container">
      {data.places.map((place) => {
        return (
          <Place
            key={place.id}
            id={place.id}
            place={place.place}
            desc={place.desc}
            img={place.img}
          />
        );
      })}
    </div>
  );
};

export default PlacesContainer;
