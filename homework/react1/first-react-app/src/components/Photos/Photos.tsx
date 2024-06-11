interface photoProps {
  url: string;
  title: string;
}

const Photos = ({ url, title }: photoProps) => {
  return (
    <div className="img-container">
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Photos;
