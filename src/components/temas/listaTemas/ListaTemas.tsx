import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListaTemas() {

    const [temas, setTemas] = useState<Tema []> ([])

    const{usuario} = useContext(AuthContext);
    const token = usuario.token;

    const navigate = useNavigate()


    useEffect(()=>{
        if(token === '') {
            alert('Faça o login')
            navigate('/login')
        }
    }, [token])

    async function BuscarTemas(){
        try {
            await buscar('/temas', setTemas, {
                headers: {
                    Authorization: token
                }
            })
        }catch (error) {
            alert('Tente novamente!')
        }
    }

    useEffect(()=>{

    },[])

    return (
        <>

        <div className='container mx-auto bg-rose-800'>
            <h1 className='text-center'> Meus temas</h1>
        <div className='grid'>
            <div className='border-2 border-lime-600 rouded'>
            <h3 className='text-x1 font-semibold bg-rose-400 text-yellow-50'>Temas</h3>
        <p>Descrição do temas</p>
        <div className='flex'>
            <button className='py-2 uppercase bg-rose-600 hover:bg-rose-600 w-full'>editar</button>
            <button className='py-2 uppercase bg-red-500 hover:bg-rose-500 w-full'>deletar</button>
        
        <div className='grid '>
            {temas}

        </div>

        </div>
        </div>
        
        </div>

        </div>
        </>
    )
}

export default ListaTemas