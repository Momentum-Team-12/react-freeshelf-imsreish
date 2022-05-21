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
              <div className="dropdown">
                <details>
                  {/* <summary>
                  </summary> */}
                  <div>
                    <p>URL: <a href={book.coverImageUrl}>{book.coverImageUrl}</a></p>
                  </div>
                  if ({book.publicationDate} !== null)
                  return {
                    <p>Date Published: {book.publicationDate}</p>
                  }
                  <p>Full Description:<br></br><br></br>
                    {book.detailedDescription}</p>
                </details>
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
