import { useContext } from "react";
import { PostContext, UserContext } from "../context";

const Posts = ({ content, image, user, id }) => {
  const userValue = useContext(UserContext);
  const {dispatch} = useContext(PostContext)
  let currUser = userValue === user;
  const handleDelete =()=> {
    if(!window.confirm('are you sure you want to delete'))return;
    dispatch({type: 'DELETE_POST', payload: {postId : id}
    });
  };

  return (
    <div className="m-3 p-4 h-64 w-64  bg-white shadow-md rounded flex flex-col justify-between"  >
      <p className="text-lg font-bold p-2 ">{content}</p>
      {image && (
        <img
        className="w-full h-32 object-cover rounded"
         src={URL.createObjectURL(image)} alt="" style={{ width: 200 }} />
      )}
      {user && <p
      className="text-sm font-bold "
       style={{ color: currUser && "red" }}>{user}</p>}
      {currUser && <p
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        button onClick={handleDelete}>Delete</p> }
    </div>
  );
};
export default Posts;
