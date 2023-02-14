import Image from 'next/image'

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import web1 from "../public/poke1.png"
import web2 from "../public/music.png"
import web3 from "../public/big.png"
import web4 from "../public/setup.png"



export default function Projects(){
    return(
        <>
        <div>
        <h2 className='text-4xl py-1'>Projetos</h2>
        <p className='text-md py-2 leading-8 text-gray-80'>Apenas alguns treinamentos e projetos que fiz para estudo</p>
         
      </div>
     
  <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">


      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">        
            <Dialog.Root>
              <Dialog.Trigger asChild>
              <div className=' rounded-lg  hover:border-red-400 hover:shadow-2xl'>
                <Image className="object-cover w-full h-56 rounded-lg lg:w-64 cursor-pointer"  src={web3} alt="Project Image" />
              </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                  <Image className="object-cover w-full rounded-lg cursor-pointer"  src={web3} alt="Project Image" />
                  <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Dialog.Close asChild>
                      
                    </Dialog.Close>
                  </div>
                  <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                  
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
              </Dialog.Root>
            <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a href="#" className="text-xl font-semibold text-gray-800 dark:text-white ">
                        Landing Page de um escritorio de Advocacia 
                    </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">HTML CSS JS</span>
            </div>
        </div>

        <div className="lg:flex">
           <Image className="object-cover w-full h-56 rounded-lg lg:w-64" objectFit='cover' src={web4} alt="Project Image" />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Habits - Projeto Ponta a ponta do Rockeseat NLW 
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">React ReactNative Prisma</span>
            </div>
        </div>

        <div className="lg:flex">
            <Image className="object-cover w-full h-56 rounded-lg lg:w-64"  src={web1} alt="Project Image" />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Pokedex - treinamento JS e chamada de API 
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">PokeAPI JS HTML</span>
            </div>
        </div>

        <div className="lg:flex">
            <Image className="object-cover w-full h-56 rounded-lg lg:w-64" src={web2} alt="Project Image" />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Music Player component
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">HTML CSS JS</span>
            </div>
        </div>

       

    </div>
    </div>
        <div className='flex justify-center pb-2 border-t-2'>
            <button
            className=" mt-4 py-2 px-4 bg-transparent text-black font-semibold rounded hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 dark:text-white"
            >Mais no Git</button>
        </div>
    </section>
    </>
    )
}