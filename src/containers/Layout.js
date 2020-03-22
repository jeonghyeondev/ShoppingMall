/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div
      css={css`
        padding: 0.75rem;
        background-color: ${props.bg || 'white'};
        border-bottom: ${props.border || '#f5f5f5'};
        height: 72px;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

export const Layout = props => {
  return (
    <div
      css={css`
        position: relative;
        margin: 0;
        padding: 0;
        height: calc(100vh - 80px);
      `}
      {...props}
    >
      <NavBar>
        <Link to="/">Home으로..</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">장바구니</Link>
        {/* <Link to="/nono">NoRoute</Link> */}
      </NavBar>
      {props.children}
    </div>
  );
};
