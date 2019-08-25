import React from 'react'



const Books = props => {
    
    
    return (
    
 <div>
          {props.books.length > 0 ? (
              props.books.map(book => (
                  <div key={book.id}>
                      <p>{book.title} by {book.author} ({book.year || 'no date'})</p>
                      <div>
                        <button onClick={()=> props.editRow(book)}>Edit</button>
                        <button onClick={() => props.deleteBook(book.id)}>Delete</button>
                      </div>
                    </div>
                     ))
                       ) : (
                    <div>
                    <p>No Books :( </p>
                    </div>
                )
            }   
    </div>
)}

export default Books;