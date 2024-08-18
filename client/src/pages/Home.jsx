import React from 'react'
import homeImg from '../assets/home.webp'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${homeImg})` }} className='w-[100%] h-[90vh] bg-cover flex flex-col items-center justify-center'>
            <h3 className='fcolor01 text-h1 font-bold'>Bem vindo ao BookList</h3>
            <h2 className='fcolor01 text-h3'>Aqui voce cria sua propria lista de livros</h2>
            <div className='text-white checks text-h3'>
                <p><i className="fa-regular fa-circle-check"></i>Add a sua coleção</p>
                <p><i className="fa-regular fa-circle-check"></i>Add um resumo</p>
                <p><i className="fa-regular fa-circle-check"></i>Add sua nota</p>
            </div>
            <button className='btnMain mt-4 text-h4'>
                <Link to={'/books'} className="fcolor01">Comece Agora</Link>
            </button>

        </div>
    )
}

export default Home