import React from 'react';
import { Layout } from './Layout';
import Counter from '../components/Counter';

function Main() {
  return (
    <Layout>
      <div>
        <h2 className="bigTitle">메인페이지</h2>
        <Counter />
      </div>
    </Layout>
  );
}

export default Main;
