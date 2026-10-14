import { NavLink } from "react-router-dom";

import Search from "./Search.jsx";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink
        to="/createPost"
        className="nav-tab"
    >
        Create Post
      </NavLink>

      <NavLink
        to="/posts"
        className="nav-tab" 
        
      >
        All Posts
      </NavLink>

      <div>
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;