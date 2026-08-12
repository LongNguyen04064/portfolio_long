"use client"

import { useState } from "react";

export default function Project() {
    //Ham quan ly trang thai cua project duoc mo hoac dong
    const [activeProject, setActiveProject] = useState<number | null>(null); 

    //"map" du lieu project
    const projectItem = [
        {   title:"Tortoise-Nest-Online-V2", 
            description:"Tortoise-Nest-Online-V2 is an online learning platform (Learning Management System) developed using NestJS for the backend and Next.js for the frontend. The project includes features for managing courses, lessons, students, payment transactions, and financial reports.",
            role:"Frontend Developer",
            tags:["Next.js", "TypeScript", "TailwindCSS"],
            spring:{
                start:"2024/06",
                end:"2024/08"
            }
        },
        {   title:"Hypee_topiks_application", 
            description:"Hypee_topiks_application is a mobile application developed using Flutter and Dart. The app allows users to browse and purchase various topics and courses.",
            role:"Frontend Developer", 
            tags:["Flutter", "Dart"],
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
    <section  className='max-w-7xl mx-auto py-20 px-6'>
        <div className='mb-6'>
            <p className='font-mono text-xs text-blue-700 tracking-widest uppercase mb-2'>02. Career</p>
            <div className='flex items-end justify-between flex-wrap gap-4'>
                <h2 className='text-5xl font-bold'>Projects</h2>
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
                        <div key={project.title} className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-16 md:py-20">
                            <button 
                                onClick={() => handleProjectClick(index)}
                                aria-label={"Show ${project.title} details"}
                                className="absolute z-30 top-10 md:top-24 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg transition-all duration-300 md:flex"
                                >
                                {/*Ping effect*/}
                                {isActive && (
                                    <>
                                        <span className="absolute inset-0 rounded-full bg-blue-300 opacity-60 animate-ping"></span>
                                        <span className="absolute -inset-2 rounded-full border border-blue-300 opacity-70 animate-pulse"></span>
                                    </>
                                )}
                                {/*button*/}
                                <span
                                        className={`relative z-10 w-full h-full rounded-full flex items-center justify-center  transition-all duration-300
                                            ${
                                                isActive
                                                    ? "bg-blue-700 text-white scale-110"
                                                    : "bg-blue-500 text-white hover:bg-blue-700 hover:scale-110"
                                            }
                                        `}
                                    >
                                        {(index + 1).toString().padStart(2, "0")}
                                    </span>
                            </button>

                            <button
                                onClick={() => handleProjectClick(index)}
                                className={` md:hidden w-12 h-12 rounded-full mx-auto flex items-center justify-center text-sm font-bold text-white shadow-lg transition-all duration-300
                                    ${
                                        isActive
                                            ? "bg-blue-700 scale-110"
                                            : "bg-blue-500 hover:bg-blue-700"
                                    }
                                `}
                                >
                                    <span className="relative">

                                        {isActive && (
                                            <span className="
                                                absolute
                                                -inset-3
                                                rounded-full
                                                border
                                                border-blue-400
                                                animate-ping
                                            "></span>
                                        )}
                                        {(index + 1).toString().padStart(2, "0")}
                                    </span>
                                </button>
                            
                            {isLeft ? (
                                <>
                                    <div className="relative pr-0 md:pr-10 flex flex-col justify-center">
                                        <span className="absolute text-[120px] md:text-[180px] font-black text-blue-50 -z-10 right-0 top-0 select-none">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <span className="text-xs uppercase tracking-[30x] text-blue-500 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 w-fit">
                                            Project
                                        </span>
                                        <h2 className="text-3xl font-bold mt-3">
                                            {project.role}
                                        </h2>
                                        <h3 className="text-lg font-semibold mt-2 text-blue-500">
                                            {project.title}
                                        </h3>
                                        <div className="mt-4 inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600">
                                            {formatMonth(project.spring.start)} -{" "}
                                            {formatMonth(project.spring.end)}
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl border border-blue-200 shadow-xl overflow-hidden transition-all duration-500">
                                        <div className={`transition-all duration-500 ease-in-out
                                            ${
                                                isActive
                                                    ? "max-h-150 opacity-100 p-8"
                                                    : "max-h-0 opacity-0 p-0"
                                                }
                                        `}>
                                            <p className="leading-8 text-gray-800">
                                                {project.description}
                                            </p>
                                            <div className="mt-8 flex flex-wrap gap-3">
                                                {project.tags.map((tag) =>(
                                                    <span key={tag} className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-8 pt-6 border-t border-gray-100">
                                                <p className="text-sm font-semibold text-gray-700 mb-3">
                                                    Additional Information
                                                </p>
                                                <p className=" text-sm leading-7 text-gray-500">
                                                    This section is a placeholder
                                                    for additional project
                                                    information. You can add
                                                    your responsibilities,
                                                    features, challenges,
                                                    achievements, or technologies
                                                    used here later.
                                                </p>
                                            </div>
                                        </div>

                                        {!isActive && (
                                            <div className="p-8 text-center">
                                                <p className=" text-sm text-gray-400">
                                                    Click the{" "}
                                                    <span className="text-blue-500 font-semibold">
                                                        {(index + 1)
                                                            .toString()
                                                            .padStart(2, "0")}
                                                    </span>{" "}
                                                    button to view details
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="bg-white rounded-xl border border-blue-200 shadow-xl overflow-hidden transition-all duration-500"> 
                                        <div className={`transition-all duration-500 ease-in-out
                                                ${
                                                    isActive
                                                        ? "max-h-150 opacity-100 p-8"
                                                        : "max-h-0 opacity-0 p-0"
                                                }
                                            `}
                                            >
                                            <p className="leading-8 text-gray-800">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 mt-8">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className=" px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-8 pt-6 border-t border-gray-100">
                                                <p className="text-sm font-semibold text-gray-700 mb-3">
                                                    Additional Information
                                                </p>
                                                <p className=" text-sm leading-7 text-gray-500">
                                                    This section is a placeholder
                                                    for additional project
                                                    information. You can add
                                                    your responsibilities,
                                                    features, challenges,
                                                    achievements, or technologies
                                                    used here later.
                                                </p>
                                            </div>
                                        </div>
                                        {!isActive && (
                                            <div className="p-8 text-center">
                                                <p className="text-sm text-gray-400">
                                                    Click the{" "}
                                                    <span className=" text-blue-500 font-semibold">
                                                        {(index + 1)
                                                            .toString()
                                                            .padStart(2, "0")}
                                                    </span>{" "}
                                                    button to view details
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative pl-0 md:pl-10 flex flex-col justify-center">
                                        <span className="absolute text-[120px] md:text-[180px] font-black text-blue-50 -z-10 right-0 top-0 select-none">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <span className="text-xs uppercase tracking-[3px] text-blue-500 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 w-fit">
                                            Project
                                        </span>
                                        <h2 className="text-3xl font-bold mt-3">
                                            {project.role}
                                        </h2>
                                        <h3 className="text-lg font-semibold mt-2 text-blue-500">
                                            {project.title}
                                        </h3>
                                        <div className="mt-6 inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600">
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
    </section>
  )
}
