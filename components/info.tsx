"use client"
import Image from 'next/image'
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export default function Info() {
  const infoItem = [
    {src:"/icons/github.png", href:"#"},
    {src:"/icons/mail1.png", href:"#"},
    {src:"/icons/linkedin.png", href:"#"},
  ]

  return (
    <section className='w-full min-h-[calc(100vh-80px)] flex items-center bg-linear-to-t from-cyan-200 to-cyan-400'>
      <div className='max-w-full mx-auto text-3xl font-semibold px-6 py-6 grid md:grid-cols-2 gap-10 items-center'>
        <div className='text-center md:text-left mb-5'>
          <div className='delay-100'>
            <p className='font-mono text-xs tracking-[0.25em] text-gray-700 mb-3 uppercase'>Front-end Developer</p>
            <h1 className='leading-none tracking-tight mb-6'>
              <span className='block font-black text-[clamp(3.5rem,8vw,6rem)] text-gray-800'>Nguyễn Thái Long</span>
            </h1>
          </div>

          <div className='font-sans mb-5 text-3xl bg-linear-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text'>
            <TypeAnimation
            sequence={[
              "Next.js Developer",
              1000,
              "Front-end Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-5 animate-fade-up delay-300 text-xl font-thin">
            Frontend Developer focused on building clean, interactive, and responsive user interfaces. Turning design concepts into functional, high-performance web applications and combine animations to make the website more visually appealing.
          </p> 

          <div className='delay-500'>
            <div className='flex items-center gap-3'>
              {
                infoItem.map((item) => (
                  <a
                    key={item.src}
                    href={item.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-200 bg-white/85 transition-all hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Image
                      src={item.src}
                      alt='icons'
                      width={100}
                      height={100}
                      className='w-5 h-5'
                    />
                  </a>
                ))
              }
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl"></div>

          <div className='flex flex-wrap gap-3 mb-12 animate-fade-up delay-400'>
            <a href='#' 
              className='inline-flex items-center gap-2 text-white px-5 py-2 rounded-2xl font-semibold text-xl transition-all duration-300 hover:scale-105 bg-linear-to-r from-blue-600 to-indigo-600 shadow hover:shadow-lg'>
              View Projects
              <ArrowUpRight
                className="animate-bounce w-5 h-5"
                />
            </a>

            <a href='#' 
              className='inline-flex items-center gap-2 px-5 py-2 rounded-2xl font-semibold text-xl bg-white/90 backdrop-blur-md text-black'>
              Get In Touch
            </a>
            
            <a
              href="#"
              className="inline-flex items-center gap-1 px-4 py-3 rounded-xl text-xl font-semibold transition-all duration-300 text-black" >
                <ArrowDownToLine 
                className="w-4 h-4"
                />
              Resume
            </a>
          </div>
        </div> 
        <div className="flex justify-center">
          <Image
          src="/images/image1.png"
          alt='developer'
          width={500}
          height={500}
          className='w-full max-w-md md:max-w-lg'
          />
        </div>
      </div>
    </section>
  )
}
