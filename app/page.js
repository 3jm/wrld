'use client'
import styles from './page_css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';


export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <section className='wrapper -z-50'>
        <div id='stars' className='overflow-hidden'></div>
        <div id='stars2' className='overflow-hidden'></div>
        <div id='stars3' className='overflow-hidden'></div>
        <div id='stars4' className='overflow-hidden'></div>
        <div id='title' className='text-center mt-20 z-50'>
          <h1 className='text-9xl font-bold z-50'>Wrld</h1>
          <span className='text-xl opacity-40 font-semibold z-50'>Enhancing your MX Bikes expierence.</span>
        </div>
        <div className='flex justify-center mt-5'>
        <button
        onClick={() => window.open('https://discord.gg/2vEqW5GfHU', '_blank')}
        className='mr-2 bg-[#136DB5] text-white py-2 font-semibold px-4 rounded-md z-50 hover:bg-[#4c9ad9] transition duration-300'>
        Support Server
      </button>
      <button 
      onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=1123436273756033074&permissions=264192&scope=bot', '_blank')}
      className='ml-2 bg-[#136DB5] text-white py-2 font-semibold px-4 rounded-md z-50 hover:bg-[#4c9ad9] transition duration-300'>
        Invite Wrld
      </button>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}