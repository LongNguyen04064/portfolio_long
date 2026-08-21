"use client"
import { Zap } from "lucide-react"
const technologies = [
    {
        name:"React",
        category:"Front-end",
        description:"Building scalable interfaces with reusable components and clean UI architecture.",
        icon:"/icons/react.svg",
    },
    {
        name:"Next.js",
        category:"Framework",
        description:"Developing fast, SEO-friendly web applications with server-side rendering, routing, and optimized performance.",
        icon:"/icons/nextdotjs.svg",
    },
    {
        name:"TypeScript",
        category:"Language",
        description:"Writing reliable and maintainable code with strong typing, better tooling, and predictable application logic.",
        icon:"/icons/typescript.svg",
    },
    {
        name:"C#",
        category:"Language",
        description:"Developing robust application logic and backend services with clean, structured, and maintainable C# code.",
        icon:"/icons/sharp.svg",
    },
    {
        name:"Tailwind CSS",
        category:"Styling",
        description:"Creating responsive and consistent interfaces with a utility-first approach and reusable design patterns.",
        icon:"/icons/tailwindcss.svg",
    },
    {
        name:"Flutter",
        category:"Mobile",
        description:"Building cross-platform mobile applications with responsive interfaces and reusable Dart-based components.",
        icon:"/icons/flutter.svg",
    },
    {
        name:"MySQL",
        category:"Database",
        description:"Designing relational databases, managing structured data, and building efficient queries for web applications.",
        icon:"/icons/mysql.svg",
    },
    {
        name:"Git",
        category:"Tools",
        description:"Managing source code, tracking changes, and collaborating efficiently through structured version control workflows.",
        icon:"/icons/git.png",
    },
]

export default function Technical() {
  return (
    <section id='technical' className='relative min-h-screen overflow-hidden bg-blue-50 py-24 lg:py-32'>
        <div className='relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10'>
            <div className='mb-6 lg:mb-20'>
                <p className='font-mono text-xs text-blue-600 tracking-widest uppercase mb-3'>03. Arsenal</p>
                <div className='flex items-end justify-between flex-wrap gap-5'>
                    <h2 className='text-5xl font-bold tracking-tight sm:text-6xl'>Technical Skills</h2>
                    <p className="max-w-md text-base leading-7 text-slate-500">
                        A collection of technologies I use to turn ideas into fast, accessible and scalable digital experiences.
                    </p>
                </div>
                <div className='mt-5 h-px w-50 bg-linear-to-r from-blue-500 to-transparent'></div>
            </div>
            <div className="grid lg:grid-cols-[0.8fr_2fr] gap-12 lg:gap-20">
                <div className="relative">
                    <div className="absolute -left-10 top-4 hidden h-24 w-24 rounded-full border border-blue-500/30 lg:block"></div>
                    <div className="relative">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-slate-700">My toolkit</span>
                        <h3 className="mt-5 max-w-sm text-3xl leading-relaxed tracking-tight text-slate-700 sm:text-4xl">
                            Tools I use to build{" "}
                            <span className="text-blue-600">
                                meaningful products.
                            </span>
                        </h3>
                        <p className="mt-3 max-w-md text-base leading-7 text-slate-500">
                            From polished frontend interfaces to APIs and mobile applications, I focus on choosing the right technology for the product rather than using technology for its own sake.
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                    {technologies.map((item, index) => {
                        return (
                            <div key={item.name} className="group relative overflow-hidden rounded-xl border border-slate-400 bg-blue-50 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500">
                                <div className="pointer-events-none absolute -left-10 -top-10 h-20 w-20 rounded-full bg-blue-500/50 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />
                                <span className="absolute right-5 top-5 font-mono text-[10px] tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                                    {(index + 1)
                                        .toString()
                                        .padStart(2, "0")}
                                </span>
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                                    <img 
                                        src={item.icon}
                                        alt={`${item.name} logo`}
                                        className="h-full w-full object-contain"
                                        loading="lazy">
                                    </img>
                                </div>
                                <div className="relative mt-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h4 className="text-lg font-semibold tracking-tight text-blue-600">
                                            {item.name}
                                        </h4>
                                        <span className="rounded-full border border-blue-600 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-blue-600">
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-16 flex items-center gap-4 lg:mt-20">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-slate-700" />

                    <div className="flex items-center gap-2">
                        <Zap
                            size={13}
                            className="text-blue-400"
                            strokeWidth={1.5}
                        />

                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                            Always learning
                        </span>
                    </div>

                    <div className="h-px flex-1 bg-linear-to-l from-transparent via-slate-700 to-slate-700" />
                </div>
        </div>
    </section>
  )
}
