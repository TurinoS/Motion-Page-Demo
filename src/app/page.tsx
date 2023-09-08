'use client'

import Image from 'next/image';
import img from '../../public/next.svg'
import { useEffect, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {

  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  const handleBg = (e: MouseEvent) => {
    if (bg.current !== null){
      bg.current.style.left = `${e.clientX}px`
      bg.current.style.top = `${e.clientY}px`
    }
  }

  useEffect(() => {
    root.current?.addEventListener("mousemove", handleBg)
  }, [])

  return (
    <main className="flex flex-col p-24 text-6xl text-orange-500">
      <section className="">
        <div className='flex mb-12'>
          <AiFillStar />
        <h1 className='flex gp-2'><Typewriter words={['Hello, World!']} loop={3} cursor={true} cursorStyle=''/></h1>
        <Cursor />
        <AiFillStar />
        </div>
        <div className='w-1/5 bg-gray-500'>
        <Tilt
            tiltReverse={true}
            scale={1.05}
          >
            <article className='hover:shadow-2xl'>
              <Image src={img} alt='next image' width={300} />
            </article>
          </Tilt>
            </div>
      </section>
      
      <section
        className="flex flex-col items-center justify-center bg-gray-500"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>oi</h2>
      </section>
      <section
        className="flex flex-col items-center justify-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className='bg-gray-500'>aiaiaiaiai</h2>
        <h2 className='bg-gray-500'>aiaiaiaiai</h2>
        <h2 className='bg-gray-500'>aiaiaiaiai</h2>
      </section>
    </main>
  )
}
