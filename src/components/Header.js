/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link to="/">MAIN</Link>
      <Link to="/sub01"> SUB_01</Link>
      <Link to="/sub02"> SUB_02 </Link>
      <Link to="/sub03"> SUB_03 </Link>
    </div>
  );
}

export default Header;
