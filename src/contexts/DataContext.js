import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, dataInitialState } from "../reducers/DataReducer";
import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitialState);

  const fetchAllUsers = async () => {
    dataDispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.get("/api/users");
      const users = response.data.users;

      if (response.status === 200) {
        dataDispatch({ type: "SET_ALL_USERS", payload: users });
      }
    } catch (e) {
      console.error(e);
    } finally {
      dataDispatch({ type: "SET_LOADING" });
    }
  };

  const fetchAllPosts = async () => {
    dataDispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.get("/api/posts");
      const posts = response.data.posts;

      if (response.status === 200) {
        dataDispatch({ type: "SET_ALL_POSTS", payload: posts });
      }
    } catch (e) {
      console.error(e);
    } finally {
      dataDispatch({ type: "SET_LOADING" });
    }
  };

  const setUserFeed = () => {
    const posts = dataState.posts;
    const currentUser = dataState.user;

    const userFeed = posts.filter(
      (post) =>
        currentUser.following.includes(post.username) ||
        post.username === currentUser.username
    );

    dataDispatch({ type: "SET_USER_FEED", payload: userFeed });
  };

  const getUser = async (userName) => {
    try {
      const commentBy = dataState.users.find(
        ({ username }) => username === userName
      );

      const response = await axios.get(`/api/users/${commentBy._id}`);

      return response.data.user;
    } catch (e) {
      console.errore();
    }
  };

  useEffect(() => {
    if (dataState.user) {
      fetchAllUsers();
      fetchAllPosts();
    }
  }, [dataState.user]);

  useEffect(() => {
    if (dataState.posts.length > 0) {
      setUserFeed();
    }
  }, [dataState.posts]);

  return (
    <DataContext.Provider
      value={{
        user: dataState.user,
        users: dataState.users,
        posts: dataState.posts,
        userFeed: dataState.userFeed,
        isLoading: dataState.isLoading,
        dataDispatch,
        getUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
