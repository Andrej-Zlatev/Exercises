interface PlaceProps {
  id: number;
  place: string;
  desc: string;
  img: string;
}

const Place = ({ place, desc, img }: PlaceProps) => {
  return (
    <div className="place-card">
      <img src={img} alt="" className="place-img" />
      <div className="place-card-text">
        <h3 className="place-card-title">{place}</h3>
        <p className="place-card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Place;
