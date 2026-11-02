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
    <div onClick={onClick} className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-200 bg-white/80 dark:bg-slate-900/90 text-left shadow-xl shadow-slate-200/50 dark:shadow-black/20 backdrop-blur-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-blue-100/70 dark:hover:shadow-blue-950/40">
      <div className={`absolute left-0 top-0 h-1 bg-linear-to-r from-blue-500 to-indigo-500 transition-all duration-500 
          ${isActive ? "w-full" : "w-0"}
        `}
      />
      <div className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
        ${isActive ? "max-h-300 p-7 opacity-100 sm:p-8" : "max-h-0 p-0 opacity-0"}`}>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) =>(
              <span key={tag} className="rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 font-mono text-xs text-blue-600 dark:text-blue-300 shadow-sm shadow-blue-100/50 dark:shadow-none transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 border-t border-slate-200 dark:border-slate-700 pt-6">
            <p className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-100">
                Objective
            </p>
            <ul className="space-y-4">
              {project.objective.map((item, index) => (
                <li key={index} className="relative flex items-center gap-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                  <span className="flex flex-1 text-sm leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-7 flex justify-end">
            <span className="font-mono text-xs text-blue-500 dark:text-blue-400 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-300">
              Hide details ↑
            </span>
          </div>
      </div>

      {!isActive && (
        <div className="flex min-h-32 flex-col px-6 py-8 text-center cursor-pointer">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base transition-colors duration-300">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) =>(
              <span key={tag} className="rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-950/60 px-3 py-1 font-mono text-xs text-blue-600 dark:text-blue-300 shadow-sm shadow-blue-100/50 dark:shadow-none transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
          <span className="shrink-0 mt-7 flex flex-wrap items-center justify-end gap-1 text-xs text-blue-500 dark:text-blue-400 font-mono transition-all duration-300 group-hover:gap-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">View details {">"}</span>
        </div>
      )}
    </div>
  )
}
