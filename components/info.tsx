"use client"
import Image from 'next/image'
import { ArrowDownToLine, ArrowUpRight, MapPin} from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export default function Info() {
  const infoItem = [
    {src:"/icons/github.png", href:"#", lable:"Github"},
    {src:"/icons/mail1.png", href:"#", lable:"Email"},
    {src:"/icons/linkedin.png", href:"#", lable:"LinkedIn"},
  ]

  function CodeLine({
    number,
    content,
    indent = false,
  }:{
    number: string
    content: React.ReactNode
    indent?: boolean
  }) {
    return (
      <div className='flex'>
        <span className='mr-6 w-5 select-none text-right text-slate-300'>{number}</span>
        <code className={`text-slate-700 ${indent ? "ml-13" : ""}`}>
          {content}
        </code>
      </div>
    )
  }

  return (
    <section id='home' className='relative min-h-screen overflow-hidden bg-slate-50 flex items-center'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_15%,rgba(59,130,246,0.10),transparent_30%)]'/>
      <div className='pointer-events-none absolute -top-40 -right-40 w-125 h-125 rounded-full bg-blue-200/20 blur-3xl'/>
      <div className='pointer-events-none absolute -bottom-50 -left-50 w-112.5 h-112.5 rounded-full bg-indigo-200/20 blur-3xl'/>
      <div className='relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pt-28 pb-20 lg:pt-32'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-16 items-center'>
          <div className='text-center lg:text-left'>
            <div className='inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 mb-7 shadow-sm'>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping'></span>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>
              </span>
              <span className='font-mono text-[11px] tracking-[0.2em] uppercase text-blue-600 font-medium'>
                Open to opportunities
              </span>
            </div>
            <p className='font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-500 mb-4'>
              Front-end Developer
            </p>
            <h1 className='leading-tight tracking-[-0.04em] mb-7'>
              <span className='block font-black text-slate-950 text-[clamp(3.5rem,9vw,6.8rem)]'>
                Nguyễn Thái
              </span>
              <span className='block font-black text-[clamp(3.5rem,9vw,6.8rem)] bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
                Long.
              </span>
            </h1>
            <div className='inline-flex items-center min-h-9 rounded-lg bg-blue-100/70 px-3 py-1 mb-6'>
              <div className='font-mono text-sm font-semibold bg-linear-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text'>
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
            </div>
            <p className="max-w-full mx-auto lg:mx-0 text-slate-500 leading-relaxed mb-7 text-base sm:text-lg">
              Frontend Developer focused on building clean, interactive, and responsive user interfaces. Turning design concepts into functional, high-performance web applications and combine animations to make the website more visually appealing.
            </p> 
            <div className='flex items-center justify-center lg:justify-start gap-2 text-sm mb-8 text-slate-500'>
              <MapPin className='w-4 h-4 text-blue-500'></MapPin>
              <span className='text-sm font-mono text-muted-foreground'>Ho Chi Minh City, VietNam</span>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-7'>
              <div className='flex items-center gap-3'>
                {
                  infoItem.map((item) => (
                    <a
                      key={item.lable}
                      href={item.href}
                      arial-label={item.lable}
                      className="group w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-500 transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-blue-50 hover:border-blue-200 hover:text-blue 600"
                    >
                      <Image
                        src={item.src}
                        alt={item.lable}
                        width={100}
                        height={100}
                        className='w-5 h-5 object-contain duration-300 transition-transform group-hover:scale-110'
                      />
                    </a>
                  ))
                }
              </div>
              <div className='hidden sm:block h-8 w-px bg-slate-200'></div>
              <div className='flex items-center gap-6'>
                <div className='text-center'>
                  <p className='text-xl font-bold text-blue-600'>
                    2+
                  </p>
                  <p className='font-mono text-[9px] tracking-wider uppercase text-slate-500'>
                    Projects
                  </p>
                </div>
                <div className='text-center'>
                  <p className='text-xl font-bold text-blue-600'>
                    5+
                  </p>
                  <p className='font-mono text-[9px] tracking-wider uppercase text-slate-500'>
                    Technologies
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-3 mt-8 mb-9 justify-center lg:justify-start'>
              <a href='#'
                className='inline-flex items-center justify-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/30'>
                View Projects
                <ArrowUpRight
                  className="w-5 h-5"
                  />
              </a>
              <a href='#' 
                className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 font-semibold text-sm sm:text-base bg-white/80 backdrop-blur text-slate-700 shadow transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg'>
                Get In Touch
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 text-blue-600 hover:-translate-y-1 hover:bg-blue-50" >
                  <ArrowDownToLine 
                  className="w-4 h-4"
                  />
                Resume
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className='absolute w-70 sm:w-100 h-70 sm:h-100 rounded-full bg-blue-300/20 blur-3xl'></div>
            <div className='relative w-full max-w-135 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-2xl shadow-slate-300/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200/50'>
              <div className='flex items-center justify-between border-b border-slate-200 bg-slate-100/80 px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-3 w-3 rounded-full bg-red-400'></span>
                  <span className='h-3 w-3 rounded-full bg-green-400'></span>
                  <span className='h-3 w-3 rounded-full bg-yellow-400'></span>
                  <span className='font-mono text-xs text-slate-500'>engineer.ts</span>
                </div>
                <span className='rounded-full bg-blue-100 px-3 py-1 font-mono text-[10px] font-semibold text-blue-600'>TypeSctipt</span>
              </div>
              <div className='overflow-x-auto p-5 sm:p-7 font-mono text-xs sm:text-sm leading-8'>
                <div className='min-w-100'>
                  <CodeLine
                    number='1'
                    content={
                      <>
                        <span className='text-purple-600'>
                          const
                        </span>{""}
                        <span className='text-blue-600'>
                          {" "}developer
                        </span>{""} = {"{"}
                      </>
                    } 
                  />
                  <CodeLine
                    number='2'
                    indent
                    content={
                      <>
                        <span className='text-blue-600'>
                          name
                        </span>:{" "}
                        <span className='text-green-600'>
                          "Nguyễn Thái Long"
                        </span>,
                      </>
                    } 
                  />
                  <CodeLine
                    number='3'
                    indent
                    content={
                      <>
                        <span className='text-blue-600'>
                          role
                        </span>:{" "}
                        <span className='text-green-600'>
                          "Front-end Developer"
                        </span>,
                      </>
                    } 
                  />
                  <CodeLine
                    number='4'
                    indent
                    content={
                      <>
                        <span className='text-blue-600'>
                          stack
                        </span>: [
                        <span className='text-green-600'>
                          "Next.js"
                        </span>,{" "}
                        <span className='text-green-600'>
                          "React"
                        </span>,{" "}
                        <span className='text-green-600'>
                          "TailWindCSS"
                        </span>],
                      </>
                    } 
                  />
                  <CodeLine
                    number='5'
                    indent
                    content={
                      <>
                        <span className='text-blue-600'>
                          location
                        </span>:{" "}
                        <span className='text-green-600'>
                          "Ho Chi Minh City
                        </span>,
                        <span className='text-green-600'>
                          VN"
                        </span>,
                      </>
                    } 
                  />
                  <CodeLine
                  number='6'
                  indent
                  content={
                    <>
                      <span className='text-blue-600'>
                        avaibable
                      </span>:{" "}
                      <span className='text-purple-600'>
                        true
                      </span>,
                    </>
                  }
                  />
                  <CodeLine
                    number='7'
                    indent
                    content={
                      <>
                        <span className='text-blue-600'>
                          passion
                        </span>:{" "}
                        <span className='text-green-600'>
                          "Build a beautiful interface"
                        </span>,
                      </>
                    } 
                  />
                  <CodeLine
                    number='8'
                    content={"}"} 
                  />
                  <CodeLine
                    number='9'
                    content={
                      <span className='text-slate-400'>
                        // Let's build something great
                      </span>
                    } 
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 
        <a href="#" className='group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
          <span className='font-mono text-[10px] tracking-[0.3em] uppercase text-slate-400 group-hover:text-blue-500 transition-all duration-300'>Scroll</span>
          <div className='flex h-8 w-5 items-start justify-center rounded-full border-2 border-slate-300 p-1 group-hover:border-blue-500 transition-all duration-300'>
            <div className='h-2 w-0.5 rounded-full bg-blue-500 animate-bounce '></div>
          </div>
        </a>
      </div>
    </section>
  )
}
