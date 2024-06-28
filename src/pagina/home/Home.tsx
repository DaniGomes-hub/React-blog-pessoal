import React from 'react';
import Edna from '../../assets/Edna.jpg'
import './Home.css';

function Home() {
return (
    <>
    <div className="bg-gray-500 flex justify-center">
        <div className='container grid grid-cols-2 text-black'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Sejam bem vindos!</h2>
            <p className='text-xl'>Aqui você é livre pra pensar e se expressar</p>

            <div className="flex justify-around gap-4">
            Ver postagem
            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
        </div>
        <div className="flex justify-center ">
        <img src={Edna} alt="" className='w - 2/3 ' />
        </div>
        </div>
    </div>

    </>
);
}

export default Home;