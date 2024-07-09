import { Post } from "../App";

interface CardProps {
  post: Post;
}

const Card = ({ post }: CardProps) => {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Card;
