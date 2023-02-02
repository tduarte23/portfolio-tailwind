import Image from 'next/image'


import web1 from "../public/poke1.png"
import web2 from "../public/zxz.png"
import web3 from "../public/big.png"
import web4 from "../public/setup.png"




export function Projects(){
    return(
        <>
        <div>
        <h2 className='text-4xl py-1'>Projetos</h2>
        <p className='text-md py-2 leading-8 text-gray-80'>Apenas alguns treinamentos e projetos que fiz para estudo</p>
         
      </div>
     
  <section class="bg-white dark:bg-gray-900">
  <div class="container px-6 py-10 mx-auto">


      <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div class="lg:flex">
              <Image class="object-cover w-full h-56 rounded-lg lg:w-64"  src={web3} alt="" />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Landing Page de um escritorio de Advocacia 
                </a>
                
                <span class="text-sm text-gray-500 dark:text-gray-300">HTML CSS JS</span>
            </div>
        </div>

        <div class="lg:flex">
           <Image class="object-cover w-full h-56 rounded-lg lg:w-64" objectFit='cover' src={web4} alt="" />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Habits - Projeto Ponta a ponta do Rockeseat NLW 
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-300">React ReactNative Prisma</span>
            </div>
        </div>

        <div class="lg:flex">
            <Image class="object-cover w-full h-56 rounded-lg lg:w-64"  src={web1} alt="" />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Pokedex - treinamento JS e chamada de API 
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-300">PokeAPI JS HTML</span>
            </div>
        </div>

        <div class="lg:flex">
            <Image class="object-cover w-full h-56 rounded-lg lg:w-64" src={web2} alt="" />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Music Player component
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-300">HTML CSS JS</span>
            </div>
        </div>

       

    </div>
  </div>
  <div className='flex justify-center pb-2'>
      <button
    className="py-2 px-4 bg-transparent text-black font-semibold border border-cyan-500 rounded hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 dark:text-white"
    >Mais no Git</button>
</div>
</section>
    </>
    )
}