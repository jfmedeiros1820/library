import React from 'react';

const Book = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.author}</h2>
    </div>
  );
}

export default Book;