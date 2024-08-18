import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/books")
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/books/" + id)
      window.location.reload() //if ok refresh page
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className=' py-8 flex flex-col items-center min-h-[100vh] '>
      <h1 className='text-h1'>Coleção</h1>
      <div className='flex gap-2 py-4'>
        {books.map(book => {
          return (
            <div key={book.id} className='flex-1 flex flex-col gap-2 w-[13rem]'>
              {book.cover && <img src={book.cover} className='w-[13rem] h-[18rem] object-fit bg-yellow-500' alt='' />}
              <h2 className='text-semibold text-center text-h4'>{book.title}</h2>
              <p>{book.desc}</p>
              <p><i className="fa-solid fa-star text-yellow-500"></i>{book.rating}</p>
              <div className='flex gap-2 '>
                <button className='hover:text-sky-500 hover:scale-125 duration-300'>
                  <Link to={`/update/${book.id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </button>
                <button className='hover:text-sky-500 hover:scale-125 duration-300' onClick={() => handleDelete(book.id)}><i className="fa-solid fa-trash-can"></i></button>
              </div>
            </div>
          )
        })}
      </div>
      <button className=' w-[10rem] btnMain'><Link to={'/add'}>+Add Livro</Link></button>
    </div>
  )
}

export default Books