import React, { useState } from 'react'

const AddUserForm = props => {

    const initialFormState = { id: null, title: '', author: '', year: ''}

    const [book, setBook] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setBook({ ...book, [name]: value })
      }

  return (
    <form  onSubmit={event => {
        event.preventDefault()
        if (!book.title || !book.author) return
        props.addBook(book)
        setBook(initialFormState)
      }}>
      <input label="title" placeholder="title" type="text" name="title" value={book.title} onChange={handleInputChange} />
      <input label="author" placeholder="author" type="text" name="author" value={book.author} onChange={handleInputChange} />
      <input label="year" placeholder="year" type="text" name="year" value={book.year} onChange={handleInputChange} />
      <button>Add new book</button>
    </form>
  )
}

export default AddUserForm