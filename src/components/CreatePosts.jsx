import { useContext, useRef, useState } from "react";
import { PostContext } from "../context";

const CreatePosts = ({ user }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const { dispatch } = useContext(PostContext);

  const imageRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !image) return;
    const newPost = { content, image, user, id: Date.now() };
    // setPosts([newPost, ...posts])

    dispatch({ type: "ADD_NEW_POST", payload: { post: newPost } });

    setContent("");
    setImage(null);
    imageRef.current.value = "";
    contentRef.current.focus();
  };
  return (
    <div className="flex jutify-center flex-col items-center text-center">
      <h1 className="text-3xl font-bold m-10">create posts</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-around items-center text-center bg-[#FFF]  "
      >
        <input
          type="text"
          placeholder="enter your context"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          ref={contentRef}
          className="border-none p-2 m-3 w-full hover:bg-blue-300 rounded"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageRef}
          className="border p-2 m-3 w-full rounded"
        />
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded w-full mt-3 hover:bg-blue-700"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default CreatePosts;
