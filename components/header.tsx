"use client";
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { MenuIcon, Sun, X, Moon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    const navItem=[
        {name:"Home", href:"#"},
        {name:"Projects", href:"#projects"},
        {name:"Skills", href:"#technical"},
        {name:"Contact", href:"#contact"},
    ]
    const [open, setOpen] = useState(false);

    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md border-b border-slate-200 transition-all duration-500 dark:bg-slate-900/95 dark:shadow-black/20 dark:border-slate-700'>
        <div className='flex max-w-full mx-auto px-6 py-2 justify-between items-center'>
            <div className="font-mono text-2xl font-bold tracking-wider group cursor-pointer">
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">&lt;</span>
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text transition-all duration-300 group-hover:tracking-widest">
                    NTL
                </span>
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text"> /&gt;</span>
            </div> 
            <div className='hidden md:flex'>
                <ul className="nav-menu items-center gap-2">
                    {
                        navItem.map((item)=>(
                            <li key={item.name}>
                                <a href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                    <Button variant="outline" size="icon" onClick={() => setDarkMode(!darkMode)}
                        className='ml-2 border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-blue-400 transition-all duration-300'>
                        {darkMode ? <Sun /> : <Moon />}
                    </Button>
                </ul>
            </div>
            <div className='flex md:hidden px-3 py-4 items-center'>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon"
                                className='border-slate-300 bg-white text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-all duration-300'>
                            {open ? <X size={24}/> : <MenuIcon size={24}/>}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align='end'
                        sideOffset={8} 
                        className='w-50 rounded-xl shadow-xl border bg-white animate-in slide-in-from-right-5 fade-in-0 dark:bg-slate-900 dark:border-slate-700'
                    >
                        <DropdownMenuGroup className='nav-menu flex flex-col gap-4 text-lg font-semibold'>
                            {
                                navItem.map((item) =>(
                                    <li key={item.name}><a href={item.href}>{item.name}</a></li>
                                ))
                            }
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </header>
  )
}