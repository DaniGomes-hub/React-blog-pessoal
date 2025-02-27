import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
const navigate = useNavigate();

const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
{} as UsuarioLogin
);

const { usuario, handleLogin } = useContext(AuthContext);

const {isLoading} = useContext(AuthContext) 

useEffect(() => {
if (usuario.token !== "") {
    navigate('/home')
}
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
setUsuarioLogin({
    ...usuarioLogin,
    [e.target.name]: e.target.value
})
}

function login(e: ChangeEvent<HTMLFormElement>) {
e.preventDefault()
handleLogin(usuarioLogin)
}

return (
<>
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
    <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
        <h2 className="text-amber-800 text-5xl ">Entre</h2>
        <div className="flex flex-col w-full">
        <label htmlFor="usuario" className="text-amber-800">Usuário</label>
        <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 border-b-amber-600 rounded p-2"
            value={usuarioLogin.usuario} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        </div>
        <div className="flex flex-col w-full">
        <label htmlFor="senha" className="text-amber-800">Senha</label>
        <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-b-amber-600 rounded p-2"
            value={usuarioLogin.senha} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
        </div>
        <button  type='submit' className="rounded bg-[#D45113] hover:bg-[#813405] text-white w-1/2 py-2 flex justify-center">
        {isLoading ? <RotatingLines
        strokeColor="lightyellow"
        strokeWidth="5"
        animationDuration="0.75"
        width="24"
        visible={true}
        /> :
        <span>Entrar</span>}
        </button>

        <hr className="border-b-amber-900 w-full" />

        <p>
        Venha fazer parte!{' '}
        <Link to="/cadastro" className="text-orange-800 hover:underline">
            Cadastre-se
        </Link>
        </p>
    </form>
    <div className="fundoLogin hidden lg:block"></div>
    </div>
</>
);
}

export default Login;