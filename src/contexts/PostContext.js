import { createContext, useContext, useEffect, useReducer } from "react";
import { postInitialState, postReducer } from "../reducers/PostReducer";
import axios from "axios";
import { useData } from "./DataContext";

const PostContext = createContext();

export function PostProvider({ children }) {
  const { user, posts, dataDispatch } = useData();
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);
  const token = localStorage.getItem("token");

  const getPostsLikedByUser = () => {
    const postsLikedByUser = posts.reduce((acc, currPost) => {
      const postLiked = currPost.likes.likedBy.find(
        ({ username }) => username === user.username
      );

      acc = postLiked ? [...acc, currPost] : [...acc];

      return acc;
    }, []);
    postDispatch({ type: "SET_LIKED", payload: postsLikedByUser });
  };

  useEffect(() => {
    getPostsLikedByUser();
  }, [posts]);

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

  const likePost = async (postId) => {
    postDispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.post(`/api/posts/like/${postId}`, "", {
        headers: { authorization: token },
      });
      const updatedPosts = response.data.posts;

      if (response.status === 201) {
        dataDispatch({ type: "SET_ALL_POSTS", payload: updatedPosts });
      }
    } catch (e) {
      console.error(e);
    } finally {
      postDispatch({ type: "SET_LOADING" });
    }
  };

  const dislikePost = async (postId) => {
    postDispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.post(`/api/posts/dislike/${postId}`, "", {
        headers: { authorization: token },
      });
      const updatedPosts = response.data.posts;

      if (response.status === 201) {
        dataDispatch({ type: "SET_ALL_POSTS", payload: updatedPosts });
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
        postLoading: postState.postLoading,
        postDispatch,
        getPost,
        likePost,
        dislikePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
