import { useEffect, useState } from "react";
import "./App.css";
import Search from "./component/Search";
import Card from "./component/Card";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filterPost, setFilterPost] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilterPost(data);
      });
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilterPost(filteredPosts);
  }, [searchTerm]);
  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      {filterPost.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </>
  );
}

export default App;
