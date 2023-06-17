import { Routes, Route } from "react-router";
import "./App.css";
import {
  Landing,
  Home,
  Explore,
  Profile,
  Bookmarks,
  Post,
  Login,
  Signup,
} from "./pages/index";
import { ProtectedRoute, Navbar } from "./components/index";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="text-slate-800 relative">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/landing"
          element={
            <ProtectedRoute>
              <Landing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:userName"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <ProtectedRoute>
              <Post />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* <ToastContainer
        autoClose={3000}
        className="w-min max-w-sm shadow-lg p-4 absolute top-0"
      /> */}
    </div>
  );
}

export default App;
