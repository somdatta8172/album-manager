
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const AlbumCard = (props) => {
  const { id, userId, title } = props.album;

  //delete an album
  const deleteAlbum = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        let updatedItems = props.albums.filter((item) => item.id != id);
        props.setItems(updatedItems);

        console.log(json);
      });
  };
  // update an album
  const updateAlbum = (e) => {
    e.preventDefault();
    let editAlert = prompt('Edit title here', '');
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        userId: userId,
        title: editAlert,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        let updatedItems = props.albums;
        console.log({ updatedItems });
        props.setItems(
          [json, ...props.albums.filter((item) => item.id != json.id)].sort(
            (a, b) => +a.id - +b.id
          )
        );
        console.log({ updatedItems });

        console.log({ props });
      });
  };

  return (
    <div className='col-md-3'>
      <div className='card my-3' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>{id}</h5>
          <p className='card-text'>{title}</p>
          <FontAwesomeIcon
            icon={faTrash}
            className='mx-2'
            onClick={deleteAlbum}
          />
          <FontAwesomeIcon icon={faPenToSquare} onClick={updateAlbum} />
        </div>
      </div>
    </div>
  );
};
export default AlbumCard;

