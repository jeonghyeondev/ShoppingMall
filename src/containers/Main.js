import React from 'react';
import { Layout } from './Layout';
function Main() {
  return (
    <Layout>
      <div>
        <h1>메인페이지</h1>
        <div className="Counter">
          <p> 카운트~~~~</p>
          <button>+1</button>
          <button>-1</button>
          <button>+5</button>
        </div>
      </div>
    </Layout>
  );
}

export default Main;
