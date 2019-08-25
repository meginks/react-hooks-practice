import React, { useState, useEffect } from 'react'

const EditBookForm = props => {

        const [book, setBook] = useState(props.currentBook)
      
        const handleInputChange = event => {
          const { name, value } = event.target
          setBook({ ...book, [name]: value });
        }

        useEffect(() => {
            setBook(props.currentBook)
          }, [props])
      
 
  return (
    <form  onSubmit={event => {
        event.preventDefault()
        props.updateBook(book.id, book)
      }}>
      <input placeholder="title" label="title" type="text" name="title" value={book.title} onChange={handleInputChange} />
      <input label="author" placeholder="author" type="text" name="author" value={book.author} onChange={handleInputChange} />
      <input placeholder="year" label="year" type="text" name="year" value={book.year} onChange={handleInputChange} />
      <button type="submit">Update book</button>
      <button onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default EditBookForm