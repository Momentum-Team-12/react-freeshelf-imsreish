import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './font.css'
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
    <div>
      <div className="eachBookBlur"
        style={{
          backgroundImage: `url(${book.coverImageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}></div>
      <div className="eachBook">
        <div className="bookImageContainer">
          <img className="bookImage" src={book.coverImageUrl} alt={book.title}
            // THANK YOU @Deepak Mallah on StackOverflow for this implementation!
            onError={({ currentTarget }) => {
              currentTarget.onError = null; // prevents a loop
              currentTarget.src = "http://placehold.jp/3d4070/ffffff/150x150.png?text=No%20image%20is%20available%20for%20this%20title";
            }}
          ></img>
        </div>
        <div className="allDesc">
          <div className="shortDesc">
            <h1 className="bookTitle">{book.title}</h1>
            <p>{book.author}</p>
            <div className="detailButtons">
              {isExpanded && (
                <div>
                  <p className="publisher">{book.publisher}</p>
                  <p className="pubDate">{book.publicationDate}</p>
                  <div className="pubURL">
                    <a href={book.url}>Get this book</a>
                  </div>
                </div>
              )}
            </div>
            <div>
              {!isExpanded && (
                <p>{book.shortDescription}</p>
              )}
            </div>
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
                  <p>{book.detailedDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="eachBookBlur"></div>
      </div >
    </div>
  );
}

export default App
