import React from 'react';
import homeLogo from '../../assets/LogoHome.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
return (
    <>
    <div className="bg-[#F8DDA4] flex justify-center">
        <div className='container grid grid-cols-2 text-[#813405]'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Sejam bem vindos!</h2>
            <p className='text-xl'>Aqui você é livre pra pensar e se expressar </p>

            <div className="flex justify-around gap-4">
            <ModalPostagem />
            <button className='rounded bg-white text-[#F9A03F] py-2 px-4'>Ver postagens</button>
        </div>
        </div>

        <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
        </div>
        </div>
    </div>
    <ListaPostagens />
    </>
);
}

export default Home;