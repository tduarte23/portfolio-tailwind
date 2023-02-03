import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub, AiOutlineGithub,
  AiOutlineMore
} from 'react-icons/ai'
import { IconContext } from "react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from "../public/heroImg.png"
import Image from 'next/image'

import About from './about';
import  Projects  from './projects';

import { useState, useEffect } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [navMenu, setNavMenu] = useState(true);
  
   useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Thomas Duarte Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className="min-h-screen pt-5 pb-7">
            <div className='py-10 mb-12 flex justify-between '>
              <h1 className='text-xl font-burtons '>Developd By <span className='text-gray-600 text-base'>TDuarte</span> </h1>
              <span className='lg:-z-10 relative '><AiOutlineMore className='cursor-pointer' onClick={() => setNavMenu(!navMenu)}/></span>
              <ul className={navMenu ? 'lg:visible lg:flex lg:items-center lg:gap-4 invisible' : 'visible flex flex-col gap-3 z-10 lg:invisible'}>
                <li>
                  <a href="#" className='text-gray-600 text-base' >Sobre</a>
                </li>
                <li>
                  <a href="#" className='text-gray-600 text-base' >Projetos</a>
                </li>
                <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
                <li>
                  <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md '>Resume</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center lg:flex-row lg:pt-14'>
              <div className='p-10 '>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'
                >Thomas Duarte Lopes</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Devloper and Designer</h3>
                <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
                  Freelancer procurando oportunidades em desenvolvimento e design
                </p>
                <div className='text-5xl flex gap-16 py-3 text-gray-600'>       
                  <IconContext.Provider value={{ color: darkMode ? "white":"" }}>
                        <a href="https://www.linkedin.com/in/thomas-duarte-lopes-b32702220/" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></a>
                        <AiFillLinkedin className='cursor-pointer'/>
                        <AiFillGithub className='cursor-pointer'/>

                  </IconContext.Provider>
                
                </div>
                </div>
                
                <div className='relative mx-auto mt-10 w-80 h-80 overflow-hidden lg:w-98 lg:h-98'>
                  <Image src={heroImg} objectFit="cover" fill={true} alt="Hero Image"/>
                </div>
              </div>
        </section>
       
          <section data-aos="fade-up">
            <About />
          </section>
       
        
          <section data-aos="fade-up" className='mt-7 pb-4'>
            <Projects />
          </section>
      </main>
    </div>
  )
}