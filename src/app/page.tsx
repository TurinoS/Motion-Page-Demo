"use client";

import Image from "next/image";
import img1 from "../../public/foto-perfil.png";
import img2 from "../../public/foto-perfil-2.png";
import img3 from "../../public/foto-perfil-3.png";
import cursor from "../../public/pointer.png";
import { useEffect, useRef } from "react";
import { useTheme } from 'next-themes';
import { AiFillStar } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Switch from 'react-switch';
import { Typewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { register } from "swiper/element";
import AOS from "aos";
import "aos/dist/aos.css";
register();

export default function Home() {
  const {theme, setTheme} = useTheme();
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const sectionBound = sectionRef.current?.getBoundingClientRect();
    const x = clientX - (sectionBound?.x || 0) - 3;
    const y = clientY - (sectionBound?.y || 0) - 3;

    imgRef.current!.style.top = y + "px";
    imgRef.current!.style.left = x + "px";
    drawTrail(x, y);
  };

  const drawTrail = (x: number, y: number) => {
    if (sectionRef.current) {
    const div = document.createElement('div');
    div.classList.add('triangle')
    div.style.top = y + "px";
    div.style.left = x + "px";

    sectionRef.current?.append(div);

    if(sectionRef.current?.childNodes.length > 25) {
    eraseTrail();
    } else {
      setTimeout(() => {
        eraseTrail();
      }, 1500)
    }
  }}

  const eraseTrail = () => {
    sectionRef.current?.removeChild(sectionRef.current.childNodes[2])
  }

  return (
    <main onMouseMove={(e) => {
      handleMouseMove(e);
    }} className="flex flex-col p-16 pt-0 text-6xl">
      <header className="flex justify-between items-center p-4 rounded my-4">
        <h1>TurinoS text project</h1>
        <Switch
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          checked={theme === 'dark' ? true : false}
          checkedIcon={<BsFillSunFill className="pt-1 ml-1 text-3xl" />}
          uncheckedIcon={<BsFillMoonStarsFill className="pt-1 ml-1 text-3xl text-purple-500" />}
          height={35}
          width={70}
          onColor="#550000"
          offColor="#390055"
        />
      </header>
      <div
        ref={sectionRef}
        className="w-full h-[400px] bg-yellow-500 dark:bg-purple-900 border-2 border-black p-6 relative overflow-hidden cursor-none"
      >
        <div className="flex justify-center pt-10 mb-12 text-blue-700 dark:text-orange-500">
          <AiFillStar />
          <h1 className="z-20">
            <Typewriter
              words={["Welcome to my motion text project!"]}
              loop={5}
              cursor={true}
              cursorStyle=""
            />
          </h1>
          <Cursor />
          <AiFillStar />
        </div>
        <div ref={imgRef} className="absolute z-10">
          <Image src={cursor} alt="pointer" width={40} height={40} />
        </div>
      </div>
      <section className="flex gap-10 mt-10">
        <div className="w-[300px]">
          <Tilt tiltReverse={true} scale={1.05}>
            <div className="w-full group overflow-hidden rounded-xl">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  enabled: true,
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect="fade"
                className="relative overflow-hidden"
              >
                <div className="dark:bg-black bg-white opacity-60 absolute top-0 group-hover:-translate-y-[200%] rounded-t-xl hover:rounded-t-xl duration-700 w-full h-[50%] z-[1] ">
                  <h2 className="text-center pt-28 group-hover:-translate-y-[200%] duration-700 dark:text-white text-black text-xl translate-x-[0%] font-bold">
                    Paulo Turino
                  </h2>
                </div>
                <div className="text-center flex gap-6 items-center justify-center dark:bg-black bg-white opacity-60 absolute z-[1] bottom-0 group-hover:translate-y-[200%] rounded-b-xl duration-700 w-full h-[50%]">
                  <h2
                    className={`relative z-[1] dark:text-white text-black text-3xl`}
                  >
                    Projects
                  </h2>
                </div>
                <SwiperSlide className="hover:shadow-2xl">
                  <div className="duration-700 blur-sm group-hover:blur-0 w-full object-cover object-center aspect-4/3">
                    <Image src={img1} alt="next image" width={300} />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="hover:shadow-2xl">
                  <div className="duration-700 blur-sm group-hover:blur-0 w-full object-cover object-center aspect-4/3">
                    <Image src={img2} alt="next image" width={300} />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="hover:shadow-2xl">
                  <div className="duration-700 blur-sm group-hover:blur-0 w-full object-cover object-center aspect-4/3">
                    <Image src={img3} alt="next image" width={300} />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Tilt>
        </div>

        <div className="bg-gray-500 dark:bg-gray-300 py-6 px-16 text-black">
          <section
            className="flex flex-col items-center justify-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2>Lorem Ipsum </h2>
          </section>
          <section
            className="flex flex-col items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-lg mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h2>
          </section>
        </div>
      </section>
    </main>
  );
}
