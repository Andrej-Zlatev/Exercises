import { FormEvent, useState } from "react";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [body, setBody] = useState("");

  const info = {
    text: text,
    body: body,
  };
  const handleSubmit = (e: React.FormEvent<FormEvent>) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          alert("Successful Post Request");
        }
      });
    console.log(text);
    console.log(body);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <textarea
          name="setBody"
          id="setBody"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
