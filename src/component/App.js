import React, { useState } from 'react';
import RepoList from './RepoList';
import '../styles/App.css'

const App = () => {
  //Returns array of two elements inside of it. Similar to destructuring
  const [resource, setResource] = useState('GabbyJ');
    return (
      <div className="container mx-auto px-4">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1" onClick={() => setResource('GabbyJ')}>Gabrielle Jacobs</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1" onClick={() => setResource('BboyAkers')}>Austin Akers</button>
        </div>
        <RepoList resource={resource} />
      </div>
    );
}

export default App