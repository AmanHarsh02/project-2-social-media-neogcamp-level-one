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
  Liked,
} from "./pages/index";
import { ProtectedRoute, Navbar, PageWrapper } from "./components/index";
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
              <PageWrapper>
                <Home />
              </PageWrapper>
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
              <PageWrapper>
                <Explore />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:userName"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Profile />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Bookmarks />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/liked"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Liked />
              </PageWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <ProtectedRoute>
              <PageWrapper>
                <Post />
              </PageWrapper>
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
