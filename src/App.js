import { Routes, Route } from "react-router";
import "./App.css";
import {
  Landing,
  Home,
  Explore,
  Profile,
  Bookmarks,
  Post,
} from "./pages/index";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <h1>Project - 2</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
