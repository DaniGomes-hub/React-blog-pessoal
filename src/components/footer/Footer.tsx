import React from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {



return (
    <>
        <div className="flex justify-center bg-slate-700 text-white">
        <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog da Dani Generation | Copyright: 2024©</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
            <LinkedinLogo size={48} weight='bold' />
            <InstagramLogo size={48} weight='bold' />
            <GithubLogo size={48} weight='bold' />
            </div>
        </div>
        </div>
    </>
)
}

export default Footer