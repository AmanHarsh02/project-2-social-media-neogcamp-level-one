import { createContext, useContext, useReducer } from "react";
import { postInitialState, postReducer } from "../reducers/PostReducer";
import axios from "axios";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);

  const getPost = async (postId) => {
    postDispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      const post = response.data.post;

      if (response.status === 200) {
        postDispatch({ type: "SET_POST", payload: post });
      }
    } catch (e) {
      console.error(e);
    } finally {
      postDispatch({ type: "SET_LOADING" });
    }
  };

  return (
    <PostContext.Provider
      value={{
        post: postState.post,
        likedPosts: postState.likedPosts,
        savedPosts: postState.savedPosts,
        postDispatch,
        getPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
