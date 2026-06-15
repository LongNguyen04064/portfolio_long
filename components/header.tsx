"use client";
import { useState } from 'react'
import { Button } from './ui/button'
import { MenuIcon, Sun, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    const navItem=[
        {name:"Home", href:"#"},
        {name:"About", href:"#"},
        {name:"Skill", href:"#"},
        {name:"Projects", href:"#"},
        {name:"Contact", href:"#"},
    ]
    const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-white shadow'>
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
                            <li key={item.name}><a href={item.href}>{item.name}</a></li>
                        ))
                    }
                    <Button variant="outline" size="icon">
                        <Sun />
                    </Button>
                </ul>
            </div>
            <div className='flex md:hidden px-3 py-4 items-center'>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            {open ? <X size={24}/> : <MenuIcon size={24}/>}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align='end'
                        sideOffset={8} 
                        className='w-50 rounded-xl shadow-xl border bg-white animate-in slide-in-from-right-5 fade-in-0'
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