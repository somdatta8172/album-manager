import './App.css';
import Header from './Header';
import AddAlbum from './AddAlbum';
import AlbumList from './AlbumList';
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <>
      <Header />
      <AddAlbum items={items} setItems={setItems} />
      <AlbumList setItems={setItems} albums={items} />
    </>
  );
}

export default App;
