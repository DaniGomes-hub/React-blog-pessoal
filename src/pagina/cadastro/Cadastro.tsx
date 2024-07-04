import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { toastAlerta } from '../../utils/toastAlerta';

function Cadastro() {
const navigate = useNavigate();

const [confirmarSenha, setConfirmarSenha] = useState<string>('');

const [usuario, setUsuario] = useState<Usuario>({
id: 0,
nome: '',
usuario: '',
senha: '',
foto: '',
});

const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
id: 0,
nome: '',
usuario: '',
senha: '',
foto: '',
});

useEffect(() => {
if (usuarioResposta.id !== 0) {
    back()
}
}, [usuarioResposta])

function back() {
    navigate('/login')
}

function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
}

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
setUsuario({
...usuario,
[e.target.name]: e.target.value,
})
}

async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
e.preventDefault();

if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
try {
await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResposta);
toastAlerta('Cadastro realizado com sucesso. Vamos começar!','sucesso');
} catch (error) {
toastAlerta('Cadastro realizado com sucesso. Vamos começar!','sucesso')
}
} else {
toastAlerta('Algo deu errado. Verifique os dados', 'erro')
setUsuario({ ...usuario, senha: "" }) 
setConfirmarSenha("")                 
}
}

return (
<>
<div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
<div className="fundoCadastro hidden lg:block"></div>
<form
    className="flex justify-center items-center flex-col w-2/3 gap-3"
    onSubmit={cadastrarNovoUsuario}
>
    <h2 className="text-amber-800 text-5xl">Cadastrar</h2>
    <div className="flex flex-col w-full">
    <label htmlFor="nome" className='text-amber-800'>Nome</label>
    <input
        type="text"
        id="nome"
        placeholder="Nome"
        className="border-2 border-b-amber-600 rounded p-2"
        name="nome"
        value={usuario.nome}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
        }
    />
    </div>
    <div className="flex flex-col w-full">
    <label htmlFor="usuario" className='text-amber-800'>E-mail</label>
    <input
        type="text"
        id="usuario"
        name="usuario"
        placeholder="Usuario"
        className="border-2 border-b-amber-600 rounded p-2"
        value={usuario.usuario}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
        }
    />
    </div>
    <div className="flex flex-col w-full">
    <label htmlFor="foto" className='text-amber-800'>Foto</label>
    <input
        type="text"
        id="foto"
        name="foto"
        placeholder="Foto"
        className="border-2 border-b-amber-600 rounded p-2"
        value={usuario.foto}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
        }
    />
    </div>
    <div className="flex flex-col w-full">
    <label htmlFor="senha" className='text-amber-800'>Senha</label>
    <input
        type="password"
        id="senha"
        name="senha"
        placeholder="Senha"
        className="border-2 border-b-amber-600 rounded p-2"
        value={usuario.senha}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
        }
    />
    </div>
    <div className="flex flex-col w-full">
    <label htmlFor="confirmarSenha" className='text-amber-800'>Confirmar Senha</label>
    <input
        type="password"
        id="confirmarSenha"
        name="confirmarSenha"
        placeholder="Confirmar Senha"
        className="border-2 border-b-amber-600 rounded p-2"
        value={confirmarSenha}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleConfirmarSenha(e)
        }
    />
    </div>
    <div className="flex justify-around w-full gap-8">
    <button className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2" onClick={back}>
        Cancelar
    </button>
    <button
        className='rounded text-white bg-[#D45113] hover:bg-[#813405] w-1/2 py-2' type='submit'>
        Cadastrar
    </button>
    </div>
</form>
</div>
</>
);
}

export default Cadastro