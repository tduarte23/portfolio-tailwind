import {AiOutlineMore, AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BiTagAlt} from 'react-icons/bi'

import { IconContext } from "react-icons";

import design from "../public/design.png"
import avatar from "../public/avatar.jpeg"
import consulting from "../public/consulting.png"
import Image from 'next/image'

export function About(){
    return (
        <div className="lg:flex lg:flex-row">
        <div className="max-w-5xl">   
        <div>
            <h3 className='text-5xl pb-3'>Sobre mim</h3>
               <p className='text-md py-2 leading-8 text-gray-80'>Olá sou Thomas , estudante de 25 anos de Sistemas para internet .Ja estudei
                e trabalhei na aréa de Ti mas como suporte e agora tendo como foco total a carreira de Desenvolvedor em especial 
              
               <span className='text-teal-500'> front end. </span> 
               Possuo conhecimentos não só do front-end como back tambem e nos intervalos estudo Web Design e Product Design.
               </p>
               <p className='text-md py-2 leading-8 text-gray-8-'>
                Algumas das tecnlogias e ferramentas que uso e estudo.
               </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='flex flex-col items-center shadow-lg p-10 rounded-xl my-10 w-96 dark:bg-gray-800'>
              <Image src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Code</h3>
               <p className='text-gray-800 py-1 dark:text-white'>Html, CSS, JS</p>
              <p className='text-gray-800 py-1 dark:text-white'>React e ReactNative</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind</p>
              <h4 className='py-4 text-teal-600'>Python</h4>
            </div>
            <div className='flex flex-col items-center shadow-lg p-10 rounded-xl my-10 w-96 dark:bg-gray-800'>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designes</h3>
              
              <h4 className='py-4 text-teal-600'>Git</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
            </div>
            </div>   
          </div>
          <div className="mb-3 lg:ml-10 h-min">
             <div className='flex flex-col shadow-xl p-4 max-w-md rounded-2xl dark:bg-gray-800'>
              <div className="flex justify-between pb-1">
                <div className='flex flex-1 gap-1'>
                <div className='rounded-2xl relative w-6 h-6 overflow-hidden flex justify-between gap-1'> 
                  
                    <Image src={avatar} fill={true} objectFit="cover" />
                             
                </div>
                    <span className='font-bold'> tduaarte1</span>   
              </div>
              <span><AiOutlineMore/></span>
              </div>
              <Image src={avatar} width={"100%"} style={ {borderRadius: "5px"}} />
              <h3 className='flex justify-between text-lg font-medium pt-5 pb-2'>
                <div className='flex gap-1'>
                  <IconContext.Provider value={{ style: { transform: "rotateY(180deg)",  } }}>
                    <AiOutlineHeart className='fill-red-600 stroke-2'/> <FaRegComment/>
                  </IconContext.Provider>
                </div>
                <IconContext.Provider value={{ style: { transform: "rotate(270deg)" } }}>
                  <BiTagAlt/>
                </IconContext.Provider>
              </h3>
              <p>Creating elegant designs for your needs
                following core design theory
              </p>
            </div>
          </div>
        </div>
    )
}