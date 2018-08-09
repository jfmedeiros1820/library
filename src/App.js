import React, { Component } from 'react';
import Book from './components/Book';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      books: []
    };
    this.saveBook = this.saveBook.bind(this);
  }

  saveBook(event) {
    event.preventDefault();
    this.setState(
      {
        books: this.state.books.concat(
          {
            title: this.state.title,
            author: this.state.author
          }
        )
      }
    );
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.saveBook}>
          <h2>Add Books</h2>
          <input type="input" onChange={(event) => this.setState({title: event.target.value})}/>

          <input type="input" onChange={(event) => this.setState({author: event.target.value})}/>

          <button>Create Book</button>
          <button>Create Book</button>
        </form>
        {this.state.books.map(book => <Book key={book.title} title={book.title} author={book.author} />)}
      </div>
    );
  }
}

export default App;
