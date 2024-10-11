import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const booksData = [
    {
        title: "RESTful Java Web Services",
        author: "David A. Chappell",
        poster: "https://m.media-amazon.com/images/I/71tCVS8JEIL._AC_UF894,1000_QL80_.jpg",
      },
      {
        title: "REST API Development with Node.js",
        author: "Francisco Doglio",
        poster: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-3715-1",
      },
      {
        title: "RESTful Web Services Cookbook",
        author: "Subbu Allamaraju",
        poster: "https://m.media-amazon.com/images/I/41fOHtYoTCL._AC_UF1000,1000_QL80_.jpg",
      },
];

const Book = ({ book, onLike, likes }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={book.poster} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <button className="btn btn-primary" onClick={onLike}>
          Like ({likes}) {/* Afficher le nombre de likes ici */}
        </button>
      </div>
    </div>
  );
};

const BookList = () => {
  const [likes, setLikes] = useState(booksData.map(() => 0));

  // Gérer le clic sur le bouton "Like"
  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  return (
    <div className="container">
      <div className="row">
        {booksData.map((book, index) => (
          <div key={index} className="col-md-4">
            <Book 
              book={book} 
              onLike={() => handleLike(index)} 
              likes={likes[index]} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;