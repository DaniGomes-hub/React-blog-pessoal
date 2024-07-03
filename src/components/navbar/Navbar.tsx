import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


function Navbar() {
const navigate = useNavigate()

const {usuario, handleLogout } = useContext(AuthContext) 

function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
}

let navbarComponent

return (
<>
<div className='w-full bg-slate-700 text-white flex justify-center py-4'>
    <div className="container flex justify-between text-lg">
    <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

    <div className='flex gap-4'>
        <Link to='/home' className='hover:underline'>Home</Link>
        <Link to='/login' className='hover:underline'>Login</Link>
        <div className='hover:underline'>Postagens</div>
        <Link to='/temas' className='hover:underline'>Temas</Link>
        <div className='hover:underline'>Cadastrar tema</div>
        <div className='hover:underline'>Perfil</div>
        <div className='hover:underline'>Sair</div>
    </div>
    </div>
</div>
</>
)
}

export default Navbar