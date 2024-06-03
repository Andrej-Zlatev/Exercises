interface DetailsBlockProps {
  title: string;
  text: string;
  imageSrc: string;
  category: string;
}

const DetailsBlock = ({
  title,
  text,
  imageSrc,
  category,
}: DetailsBlockProps) => {
  return (
    <div className="details-block">
      <div className="card">
        <div className="card-text">
          <p className="card-category">{category}</p>
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{text}</p>
        </div>
        <div className="card-img">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
