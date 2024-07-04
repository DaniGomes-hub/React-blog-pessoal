import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {
const navigate = useNavigate();

const { usuario, handleLogout } = useContext(AuthContext);

function logout() {
handleLogout();
toastAlerta('Bem vindo de volta', 'sucesso');
navigate('/login');
}

let navbarComponent;

if (usuario.token !== '') {
navbarComponent = (
<div className='w-full bg-[#D45113] text-white flex justify-center py-4'>
<div className="container flex justify-between text-lg">
        <Link to='/home' className="text-2xl font-bold uppercase">Blog Pessoal</Link>

        <div className="flex gap-4">
        <Link to="/home" className="hover:underline cursor-pointer">
            Postagens
        </Link>
        <Link to="/temas" className="hover:underline cursor-pointer">
            Temas
        </Link>
        <Link
            to="/formularioTema"
            className="hover:underline cursor-pointer"
        >
            Cadastrar tema
        </Link>
        <Link to='/perfil' className='hover:underline'>Perfil</Link>
        <Link
            to="/"
            onClick={logout}
            className="hover:underline cursor-pointer"
        >
            Sair
        </Link>
        </div>
    </div>
    </div>
);
}

return (
<>
    {navbarComponent}
</>
);
}

export default Navbar;