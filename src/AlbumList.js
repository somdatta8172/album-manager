import React, { useEffect } from 'react';
import { useState } from 'react';
import AlbumCard from './AlbumCard';

const AlbumList = (props) => {
  const [albumList, setAlbumList] = useState(null);

  const createAlbumList = () => {
    setAlbumList(
      props.albums.map((album, i) => {
        return (
          <AlbumCard
            key={i}
            album={album}
            setItems={props.setItems}
            albums={props.albums}
          />
        );
      })
    );
  };

  useEffect(() => {
    createAlbumList();
  }, [props]);

  return (
    <div className='row my-5 mx-2'>
      <h2>Your Albums </h2>
      {albumList}
    </div>
  );
};
export default AlbumList;
