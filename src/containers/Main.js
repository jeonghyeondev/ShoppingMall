import React, { Component } from 'react';
import { Layout } from './Layout';
import Counter from '../components/Counter';
function Main() {
  return (
    <Layout>
      <div>
        <h1>메인페이지</h1>
        <Counter />
      </div>
    </Layout>
  );
}

export default Main;
