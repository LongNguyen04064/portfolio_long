"use client"

import { useState } from "react";
import ProjectCard from "./projectcard"
import { FolderOpenDot, CalendarDays } from "lucide-react";

export default function Project() {
    //Ham quan ly trang thai cua project duoc mo hoac dong
    const [activeProject, setActiveProject] = useState<number | null>(null); 

    //"map" du lieu project
    const projectItem = [
        {   title:"Tortoise-Nest-Online-V2", 
            description:"Tortoise-Nest-Online-V2 is an online learning platform (Learning Management System) developed using NestJS for the backend and Next.js for the frontend. The project includes features for managing courses, lessons, students, payment transactions, and financial reports.",
            role:"Frontend Developer",
            tags:["Next.js", "TypeScript", "TailwindCSS"],
            objective:[
                "Developed the frontend using Next.js, TypeScript, and Tailwind CSS.",
                "Built responsive and user-friendly UI components and pages.",
                "Developed reusable UI components using Next.js.",
                "Implemented interfaces for courses, lessons, students, teachers, and payments.",
            ],
            spring:{
                start:"2024/06",
                end:"2024/08"
            }
        },
        {   title:"Hypee_topiks_application", 
            description:"Hypee_topiks_application is a mobile application developed using Flutter and Dart. The app allows users to browse and purchase various topics and courses.",
            role:"Frontend Developer", 
            tags:["Flutter", "Dart"],
            objective:[
                "Designed and implemented mobile interfaces based on application requirements.",
                "Developed reusable Flutter widgets for lessons and learning features.",
                "Tested UI interactions and optimized the application for a better user experience.",
        ],
            spring:{
                start:"2025/10",
                end:"2025/12"
            }
        },
    ]
    // Ham dinh dang thang va nam tu chuoi "YYYY/MM" sang dinh dang "Month Year"
    const formatMonth = (value: string) => {
        const [year, month] = value.split('/').map(Number);
        
        const date = new Date(year, month - 1);
        
        return Intl.DateTimeFormat("en-Us",{ 
            month:"long",
            year:"numeric",
            }).format(date);
    };

    const handleProjectClick = (index: number) => {
        setActiveProject(
            activeProject === index ? null : index
        )
    };
    
  return (
    <section id="projects" className='relative min-h-screen overflow-hidden bg-slate-50 py-24 lg:py32'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_15%,rgba(59,130,246,0.10),transparent_30%)]'/>
        <div className='pointer-events-none absolute -top-40 -right-40 w-125 h-125 rounded-full bg-blue-200/20 blur-3xl'/>
        <div className='pointer-events-none absolute -bottom-50 -left-50 w-112.5 h-112.5 rounded-full bg-indigo-200/20 blur-3xl'/>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className='mb-6 lg:mb-20'>
                <p className='font-mono text-xs text-blue-600 tracking-widest uppercase mb-3'>02. Career</p>
                <div className='flex items-end justify-between flex-wrap gap-5'>
                    <h2 className='text-5xl font-bold tracking-tight sm:text-6xl'>Projects</h2>
                </div>
                <div className='mt-5 h-px w-50 bg-linear-to-r from-blue-500 to-transparent'></div>
            </div>
            <div className='relative'>
                <div className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-300 hidden md:block'></div>
                {
                    projectItem.map((project, index) => {
                        const isLeft = index % 2 === 0;
                        const isActive = activeProject === index;
                        return (
                            <div key={project.title} className="relative grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:gap-20 md:py-20">
                                <button 
                                    onClick={() => handleProjectClick(index)}
                                    aria-label={`Show ${project.title} details`}
                                    className="cursor-pointer absolute z-30 top-0 md:top-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full hidden md:flex items-center justify-center font-bold text-lg border-4 border-blue-600 hover:scale-110 shadow-lg transition-all duration-300">
                                    {/*Ping effect*/}
                                    {isActive && (
                                        <>
                                            <span className="absolute inset-0 rounded-full bg-blue-300 opacity-60 animate-ping"></span>
                                            <span className="absolute -inset-2 rounded-full border border-blue-300 opacity-70 animate-pulse"></span>
                                        </>
                                    )}
                                    <span className={`relative z-10 w-full h-full rounded-full flex items-center justify-center transition-all duration-300
                                        ${
                                            isActive
                                                ? "bg-linear-to-l from-blue-600 to-indigo-500 text-white scale-110"
                                                : "bg-white text-blue-600 hover:scale-100"
                                        }
                                        `}
                                    >
                                        {(index + 1).toString().padStart(2, "0")}
                                    </span>
                                </button>
                                
                                {isLeft ? (
                                    <>
                                    {/*Left side*/}
                                        <div className="relative pt-16 md:pt-0 md:pr-10 flex flex-col justify-center">
                                            <span className="pointer-events-none absolute text-[120px] md:text-[180px] leading-none font-black text-blue-100/60 -z-10 right-0 top-0 select-none">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <div className="flex w-fit pt-1.5 px-4 py-1 gap-1 rounded-full text-blue-600 border border-blue-200 bg-blue-50 shadow-lg backdrop-blur">
                                                <FolderOpenDot className="h-4 w-4"/>
                                                <span className="inline-flex px-1 text-[11px] font-bold font-mono tracking-widest uppercase">
                                                    Project
                                                </span>
                                            </div>
                                            <h2 className={`mt-4 text-3xl lg:text-4xl font-black tracking-tight transition-all duration-300
                                                    ${isActive ? "text-blue-600" : "text-slate-950"}
                                                    `}
                                                >
                                                {project.title}
                                            </h2>
                                            <h3 className="mt-2 text-lg font-semibold text-blue-600">
                                                {project.role}
                                            </h3>
                                            <div className="mt-4 gap-1 pt-3 pb-1 flex w-fit rounded-full border border-blue-200 bg-blue-50 tracking-wide px-4 py-2 text-xs font-mono text-blue-600 shadow-sm backdrop-blur">
                                                <CalendarDays className="h4 w-4 pb-2 "/>
                                                {formatMonth(project.spring.start)} -{" "}
                                                {formatMonth(project.spring.end)}
                                            </div>
                                        </div>
                                        {/*Right side*/}
                                        <ProjectCard
                                            project={project}
                                            index={index}
                                            isActive={isActive}
                                            onClick={() => handleProjectClick(index)}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <ProjectCard
                                        project={project}
                                        index={index}
                                        isActive={isActive}
                                        onClick={() => handleProjectClick(index)}
                                        />

                                        <div className="relative pl-0 md:pl-10 flex flex-col justify-center">
                                            <span className="pointer-events-none absolute text-[120px] md:text-[180px] leading-none font-black text-blue-100/60 -z-10 right-0 top-0 select-none">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <div className="flex w-fit pt-1.5 px-4 py-1 gap-1 rounded-full text-blue-600 border border-blue-200 bg-blue-50 shadow-lg backdrop-blur">
                                                <FolderOpenDot className="h-4 w-4"/>
                                                <span className="px-1 text-[11px] font-bold font-mono tracking-widest uppercase">
                                                    Project
                                                </span>
                                            </div>
                                            <h2 className={`mt-4 text-3xl lg:text-4xl font-black tracking-tight transition-all duration-300
                                                    ${isActive ? "text-blue-600" : "text-slate-950"}
                                                    `}
                                                >
                                                {project.title}
                                            </h2>
                                            <h3 className="mt-2 text-lg font-semibold text-blue-600">
                                                {project.role}
                                            </h3>
                                            <div className="mt-4 gap-1 pt-3 pb-1 flex w-fit rounded-full border border-blue-200 bg-blue-50 tracking-wide px-4 py-2 text-xs font-mono text-blue-600 shadow-sm backdrop-blur">
                                                <CalendarDays className="h4 w-4 pb-2 "/>
                                                {formatMonth(project.spring.start)} -{" "}
                                                {formatMonth(project.spring.end)}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
