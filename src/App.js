import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  console.log("requests",requests)
  return (
    <div className="App">
      <h1>Hey Rachel! Lets build netflix-clone front-end today </h1> 
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
