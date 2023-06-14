import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { authInitialState, authReducer } from "../reducers/AuthReducer";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();
let method = "";

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (token) {
      setLoggedIn(true);

      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (userDetails) {
      method === "login" ? performLogin() : performSignup();
      // setIsLoading(true);
    }
  }, [userDetails]);

  const performLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: authState.username,
        password: authState.password,
      });

      console.log("hello");

      console.log(response.data.encodedToken, response.data.foundUser);

      if (response.status === 200) {
        toast.success("Login Successful");
        setLoggedIn(true);
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));

        navigate("/");
      }
    } catch (e) {
      console.error(e);
    } finally {
      // setIsLoading(false);
    }
  };

  const performSignup = () => {};

  const loginValidation = () => {
    if (
      authState.username.trim().length <= 0 &&
      authState.password.trim().length <= 0
    ) {
      return console.error("Username & Password cannot be empty");
    } else if (authState.username.trim().length <= 0) {
      return console.error("Username cannot be empty");
    } else if (authState.password.trim().length <= 0) {
      return console.error("Password cannot be empty");
    }

    method = "login";
    setUserDetails({
      username: authState.username,
      password: authState.password,
    });
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, authState, authDispatch, loginValidation }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
