import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, dataInitialState } from "../reducers/DataReducer";
import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitialState);
  const token = localStorage.getItem("token");

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

    const userFeed = posts.filter((post) => {
      const isFollowing = currentUser.following.some(
        (user) => user.username === post.username
      );
      return isFollowing || post.username === currentUser.username;
    });

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

  const getUserPosts = async (userName) => {
    dataDispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.get(`/api/posts/user/${userName}`);
      const posts = response.data.posts;

      if (response.status === 200) {
        dataDispatch({ type: "SET_USER_POSTS", payload: posts });
      }
    } catch (e) {
      console.error(e);
    } finally {
      dataDispatch({ type: "SET_LOADING" });
    }
  };

  const followUserHandler = async (userId) => {
    dataDispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const user = response.data.user;

      if (response.status === 200) {
        dataDispatch({ type: "SET_USER", payload: user });
      }
    } catch (e) {
      console.error(e);
    } finally {
      dataDispatch({ type: "SET_LOADING" });
    }
  };

  const unfollowUserHandler = async (userId) => {
    dataDispatch({ type: "SET_LOADING" });

    try {
      const response = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const user = response.data.user;

      if (response.status === 200) {
        dataDispatch({ type: "SET_USER", payload: user });
      }
    } catch (e) {
      console.error(e);
    } finally {
      dataDispatch({ type: "SET_LOADING" });
    }
  };

  const suggestedUsers = dataState.users.filter(
    (suggestedUser) =>
      suggestedUser._id !== dataState.user._id &&
      !dataState.user.following.find((user) => user._id === suggestedUser._id)
  );

  useEffect(() => {
    if (dataState.user) {
      fetchAllUsers();
      fetchAllPosts();
    }
  }, [dataState.user]);

  console.log(dataState.userFeed);

  useEffect(() => {
    if (dataState.posts.length > 0) {
      setUserFeed();
    }
  }, [dataState.posts, dataState.user]);

  return (
    <DataContext.Provider
      value={{
        user: dataState.user,
        users: dataState.users,
        userPosts: dataState.userPosts,
        posts: dataState.posts,
        userFeed: dataState.userFeed,
        isLoading: dataState.isLoading,
        dataDispatch,
        suggestedUsers,
        getUser,
        getUserPosts,
        followUserHandler,
        unfollowUserHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
