/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const header = css`
  padding: 20px 0;
`;
const link = css`
  display: inline-block;
  color: #000;
  text-decoration: none;
  border-right: 1px solid #ccc;
  padding: 0 20px;
  font-size: 20px;
  &:hover {
    color: #029e74;
  }
`;

function Header() {
  return (
    <div css={header}>
      <Link to="/" css={link}>
        MAIN
      </Link>
      <Link to="/sub01" css={link}>
        SUB01
      </Link>
      <Link to="/sub02" css={link}>
        SUB02
      </Link>
      <Link to="/sub03" css={link}>
        SUB03
      </Link>
    </div>
  );
}

export default Header;
