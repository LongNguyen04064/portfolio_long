"use client"
type ProjectCardProps = {
  project:{
    title: string
    description: string
    tags: string[]
    objective: string[]
  }
  index: number
  isActive: boolean
  onClick: () => void
}

export default function ProjectCard({
  project,
  isActive,
  onClick,
}:ProjectCardProps) {

  return (
    <div onClick={onClick} className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white/80 text-left shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-blue-100">
      <div className={`absolute left-0 top-0 h-1 bg-linear-to-r from-blue-500 to-indigo-500 transition-all duration-300 
          ${isActive ? "w-full" : "w-0"}
        `}
      />
      <div className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
        ${isActive ? "max-h-300 p-7 opacity-100 sm:p-8" : "max-h-0 p-0 opacity-0"}`}>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) =>(
              <span key={tag} className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 font-mono text-xs text-blue-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 border-t border-slate-200 pt-6">
            <p className="mb-2 text-sm font-semibold text-slate-700">
                Objective
            </p>
            <ul className="space-y-4">
              {project.objective.map((item, index) => (
                <li key={index} className="relative flex items-center gap-2 text-sm leading-7 text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="flex flex-1 text-sm leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
      </div>

      {!isActive && (
        <div className="flex min-h-32 flex-col px-6 py-8 text-center cursor-pointer">
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) =>(
              <span key={tag} className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 font-mono text-xs text-blue-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <span className="shrink-0 flex flex-wrap items-end justify-end gap-1 text-xs text-blue-400 font-mono transition-all group-hover:text-blue-700">View details {">"}</span>
        </div>
      )}
    </div>
  )
}
