import React from 'react';
import CompGet from './components/CompGet';
import CompGetParam from './components/CompGetParam';
import CompPost from './components/CompPost';
import CompLogin from './components/CompLogin.jsx';

export default function App() {
  return (
    <div>
      <CompLogin />
      <hr />
      <CompGetParam />
      <hr />
      <CompPost />
      <hr />
      <CompGet />
    </div>
  );
}

