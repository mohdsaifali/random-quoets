import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  return (
    <div className="app">
      <div className="quote-box">
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
        <button onClick={fetchQuote} class="btn btn-success" >New Quote</button>
      </div>
    </div>
  );
};

export default App;

