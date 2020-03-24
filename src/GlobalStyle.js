import React from 'react';

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
        font-family: 'Roboto', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
      }
      .bigTitle {
        font-size: 30px;
        padding-left: 30px;
        &:before {
          display: inline-block;
          content: '';
          width: 5px;
          height: 20px;
          background: #029e74;
          margin-right: 10px;
        }
      }
    `}
  />
);
