import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { bookData } from './book-data';

function App() {
  const [books] = useState(bookData)
  return (
    <div>
      {books.map((book) => (
        <EachBook book={book} />
      ))}
    </div>
  )
}

function EachBook({ book }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    //data here
    <div className="bookAll">
      <div className="allDesc">
        <div className="shortDesc">
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.shortDescription}</p>
        </div>
        <div className="dropdown">
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
          <div className="longDesc">
            {isExpanded && (
              <div>
                <div>
                  <p>Link: <a href={book.url}>{book.url}</a></p>
                </div>
                <p>Publisher: {book.publisher}</p>
                <p>Date Published: {book.publicationDate}</p>
                <p>Full Description:</p><p>{book.detailedDescription}</p>
              </div>
            )}
          </div>
        </div>
        <div className="bookImageContainer">
          <img className="bookImage" src={book.coverImageUrl} alt={book.title}
            // THANK YOU @Deepak Mallah on StackOverflow for this implementation!
            onError={({ currentTarget }) => {
              currentTarget.onError = null; // prevents a loop
              currentTarget.src = "http://placehold.jp/3d4070/ffffff/150x150.png?text=No%20image%20is%20available%20for%20this%20title";
            }}
          ></img>
        </div>
      </div>
    </div >
  );
}

export default App
