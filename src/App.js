import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { bookData } from './book-data';

function App() {
  const [books] = useState(bookData)

  return (
    <div>
      {books.map((book) => (
        <div className="bookElement">
          <div className="allDesc">
            <div className="shortDesc">
              <h1>{book.title}</h1>
              <p>{book.author}</p>
              <p>{book.shortDescription}</p>
            </div>
            <div className="longDesc">
              <p>Wrap the below data in a dropdown:</p>
              <div className="dropdown">
                <div>
                  <p>URL: <a href={book.coverImageUrl}>{book.coverImageUrl}</a></p>
                </div>
                <p>Publisher: {book.publisher}</p>
                <p>Date Published: {book.publicationDate}</p>
                <p>Full Description:<br></br><br></br>
                  {book.detailedDescription}</p>
              </div>
            </div>
          </div>
          <div className="bookImageContainer">
            <img className="bookImage" src={book.coverImageUrl} alt={book.title}></img>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
