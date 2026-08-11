"use client"

export default function Project() {
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
    const formatMonth = (value: string) => {
        const [year, month] = value.split('/').map(Number);
        
        const date = new Date(year, month - 1);
        
        return Intl.DateTimeFormat("en-Us",{ 
            month:"long",
            year:"numeric",
            }).format(date);
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
            <div className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-300'></div>
            {
                projectItem.map((project, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={project.title} className="relative grid grid-cols-2 gap-20 py-20">
                            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold border-4 border-white shadow-lg">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                            
                            {isLeft ? (
                                <>
                                    <div className="relative pr-10 flex flex-col justify-center">
                                        <span className="absolute text-[180px] font-black text-blue-50 -z-10 right-0 top-0">
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
                                    <div className="bg-white rounded-xl border border-blue-200 p-8 shadow-xl hover:-translate-y-1 transition-all">
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
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="bg-white rounded-3xl border border-blue-200 p-8 shadow-xl hover:-translate-y-1 transition-all"> 
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
                                    </div>
                                    <div className="relative pl-10 flex flex-col justify-center">
                                        <span className="absolute text-[180px] font-black text-blue-50 -z-10 right-0 top-0">
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
