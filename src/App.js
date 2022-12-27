import React from 'react';
import { Link, Router } from '@reach/router';
import Administration from './pages/Administration';
import ASSET_MANAGER from './pages/ASSET_MANAGER';
import ASSET_REVIEW from './pages/ASSET_REVIEW';

import Breadcrumb from './Breadcrumb';

const items = [
  { to: '/', label: 'Administration' },
  { to: '/ASSET_MANAGER', label: 'ASSET_MANAGER' },
  { to: '/ASSET_REVIEW', label: 'ASSET_REVIEW' },
];

const App = () => (
  <div className="app">
    <Breadcrumb>
      {items.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
          <span className="breadcrumb-arrow">&gt;</span>
        </Link>
      ))}
    </Breadcrumb>
    <Router>
      <Administration path="/" />
      <ASSET_MANAGER path="/ASSET_MANAGER" />
      <ASSET_REVIEW path="/ASSET_REVIEW" />
    </Router>
  </div>
);

export default App;
