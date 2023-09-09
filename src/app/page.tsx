"use client";

import Image from "next/image";
import img1 from "../../public/foto-perfil.png";
import img2 from "../../public/foto-perfil-2.png";
import img3 from "../../public/foto-perfil-3.png";
import { useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
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
AOS.init();
register();

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  const handleBg = (e: MouseEvent) => {
    if (bg.current !== null) {
      bg.current.style.left = `${e.clientX}px`;
      bg.current.style.top = `${e.clientY}px`;
    }
  };

  useEffect(() => {
    root.current?.addEventListener("mousemove", handleBg);
  }, []);

  return (
    <main className="flex flex-col p-24 text-6xl text-orange-500">
      <section className="min-h-screen">
        <div className="flex mb-12">
          <AiFillStar />
          <h1>
            <Typewriter
              words={["Hello, World! 葆"]}
              loop={3}
              cursor={true}
              cursorStyle=""
            />
          </h1>
          <Cursor />
          <AiFillStar />
        </div>
          <div className="w-1/5">
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
                    <h2 className={`relative z-[1] dark:text-white text-black text-3xl`}>
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
      </section>

      <div className="bg-gray-500 py-6 px-16 text-black">
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
          <h2 className="text-lg mt-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
        </section>
      </div>
    </main>
  );
}
