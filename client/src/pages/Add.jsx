import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    rating: null,
    cover: ""
  })

  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/books", book)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className='flex flex-col items-center py-12 min-h-[70vh]'>
    <h1 className='text-h1 max-xl:text-h3'>Adicionar Livro</h1>
    <div className='flex flex-col gap-2'>
      <input type='text' className='border-2 border-black' placeholder='Título' onChange={handleChange} name="title" />
      <input className='w-80 h-40 border-2 border-black'  type='text'  placeholder='Descrição' onChange={handleChange} name="desc" />
      <div className='flex'>
        <p>Nota</p>
        <select type='number' onChange={handleChange} name="rating">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <input type='text' placeholder='Capa' onChange={handleChange} name="cover" />
      </div>
      <button className='btnMain' onClick={handleClick}>
      +Add</button>
    </section>

  )
}

export default Add