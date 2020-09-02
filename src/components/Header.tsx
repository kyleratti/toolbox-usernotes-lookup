import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <>
    <h1>Toolbox User Notes Lookup Tool</h1>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
