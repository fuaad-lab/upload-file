import { useContext } from "react";
import Posts from "./Posts";
import { PostContext } from "../context";

const PostsList = () => {
  const { state } = useContext(PostContext);
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {state.posts.map((post) => (
        <Posts key={post.id} {...post} />
      ))}
    </div>
  );
};
export default PostsList;
