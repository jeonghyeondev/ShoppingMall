/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div
      css={css`
        ${'' /* padding: 0.75rem; */}
        background-color: ${props.bg || 'white'};
        border-bottom: ${props.border || '#f5f5f5'};
        ${'' /* height: 72px; */}
        position: absolute;
        top: -35px;
        right: 10px;
        color: #000;
        font-size: 13px;
        a {
          text-decoration: none;
          color: #000;
          padding-left: 10px;
          &:first-child{padding-left: 0}
          &:hover{color:#029E74}
        }
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
        height: calc(100vh - 217px);
        border-top: 1px solid #ccc;
        padding-top: 100px;
      `}
      {...props}
    >
      <NavBar>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/cart">CART</Link>
        {/* <Link to="/nono">NoRoute</Link> */}
      </NavBar>
      {props.children}
    </div>
  );
};
