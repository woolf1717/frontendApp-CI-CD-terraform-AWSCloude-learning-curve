import { Outlet } from 'react-router-dom';
import React from 'react';
import { TechnicalComponent } from './ui/technical-component';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Hello Rick and Morty - Fan Service</h1>
      </div>
      <Outlet />
      <TechnicalComponent />
    </div>
  );
};

export default App;
