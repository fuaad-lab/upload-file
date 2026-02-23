import { useState, useEffect, useReducer } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePosts from "./components/CreatePosts";
import PostList from "./components/PostsList";
import { PostContext, UserContext } from "./context";
import PostReducer from "./PostReducer";

function App() {
  const [user, setUser] = useState("");
  // const [posts, setPosts] = useState([]);

  const initialPostState = { posts: [] };
  const [state, dispatch] = useReducer(PostReducer, initialPostState);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "please login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;
  return (
    <div className="bg-[#FFFDF6]">
      <PostContext.Provider value={{ state, dispatch }}>
        <UserContext.Provider value={user}>
          <Header user={user} setUser={setUser} />
          <CreatePosts user={user} />
          <PostList />
        </UserContext.Provider>
      </PostContext.Provider>
    </div>
  );
}

export default App;
