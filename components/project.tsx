"use client"

export default function Project() {
    const projectItem = [
        {   title:"Tortoise-Nest-Online-V2", 
            description:"Tortoise-Nest-Online-V2 là một nền tảng học trực tuyến (Learning Management System) được phát triển bằng NestJS cho backend và Next.js cho frontend. Dự án bao gồm các tính năng quản lý khóa học, bài học, học viên, giảng viên, giao dịch thanh toán và báo cáo tài chính.",
            role:"Frontend Developer",
            tags:["Next.js", "TypeScript", "TailwindCSS"],
            spring:{
                start:"2024/06",
                end:"2024/08"
            }
        },
        {   title:"Hypee_topiks_application", 
            description:"B", 
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
    <div className='w-full mx-auto'>
        <div className='mb-6'>  
            <p className='font-mono text-xs text-blue-700 tracking-widest uppercase mb-2'>03. Career</p>
            <div className='flex items-end justify-between flex-wrap gap-4'>
                <h2 className='text-5xl font-bold'>Projects</h2>
            </div>
            <div className='mt-4 h-px w-50 bg-linear-to-r from-blue-500 to-transparent'></div>
        </div>

        <div className='relative'>
            <div className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-300'></div>
            {
                projectItem.map((project, index) => (
                    <div key={project.title} className='grid grid-cols-2 gap-20 py-20 relative'>
                        <div className='absolute left-1/2 top-10 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 text-white flex justify-center items-center border-4 border-white'>
                            {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.role}</p>
                            <p>
                                {formatMonth(project.spring.start)}
                                -
                                {formatMonth(project.spring.end)}
                            </p>
                            <div className='text-sm text-gray-500'>
                                {project.tags.map((tag, index) => (
                                    <span key={index} className='bg-blue-100 text-blue-800 px-2 py-1 rounded-md mr-2'>
                                        {tag}
                                    </span>
                                ))
                                }
                            </div>
                        </div>
                        
                        <div>
                            {project.description}
                        </div>
                    </div>    
                ))
            }
        </div>
    </div>
  )
}
