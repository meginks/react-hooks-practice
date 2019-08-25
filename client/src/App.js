import React, {useState} from 'react';
import Books from './components/BooksTable';
import AddBookForm from './components/AddBookForm';
import EditBookForm from './components/EditBookForm';
import './App.css';

function App() {
  const bookData = [
    {id: 1, title: 'East of Eden', author: 'John Steinbeck'}, 
    {id: 2, title: 'A Tree Grows in Brooklyn', author: 'Betty Smith'}, 
    {id: 3, title: 'A Brave New World', author: 'Aldous Huxley'}
  ];

  const initialFormState = { id: null, title: '', author: '' }
  const [currentBook, setCurrentBook] = useState(initialFormState)
  const [editing, setEditing] = useState(false);
  const [books, setBooks] = useState(bookData);

  const addBook = book => {
    book.id = books.length + 1; 
    setBooks([...books, book])
  }

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  const updateBook = (id, updatedBook) => {
      setEditing(false)
      setBooks(books.map(book => (book.id === id ? updatedBook : book))) 
  }

  const editRow = book => {
    setEditing(true)
    setCurrentBook({ id: book.id, title: book.title, author: book.author })
  }

  return (
    <div className="App">
      <h1>Reading List</h1>
      { editing ?
      <EditBookForm 
      editing={editing}
      setEditing={setEditing}
      currentBook={currentBook}
      updateBook={updateBook} /> :
      <AddBookForm addBook={addBook}/>   
      }
     <Books books={books} editRow={editRow} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
