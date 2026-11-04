"use client"
import { MapPin, ArrowUpRight, Mail, Send } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Reveal from './reveal'

export default function Contact() {
    const [form, setForm] = useState ({
        name:"",
        email:"",
        message:"",
    })
    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    // Form validation
    const isFormValid =
        form.name.trim() !== "" &&
        form.email.trim() !== "" &&
        form.message.trim() !== ""

    // Form submission handler       
    const handelSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isFormValid) return
        console.log("Form submitted:", form)
        setForm({
            name: "",
            email: "",
            message: "",
        })
    }
    // Contact information data
    const contactItems = [
        {
            title:"Email",
            value:"ntlong058@gmail.com",
            href:"mailto:ntlong058@gmail.com",
            icon:"/icons/mail1.png",
        },
        {
            title: "LINKEDIN",
            value: "linkedin.com/in/ntlong0406/",
            href: "https://www.linkedin.com/in/ntlong0406/",
            icon: "/icons/linkedin.png",
        },
        {
            title: "GITHUB",
            value: "github.com/LongNguyen04064",
            href: "https://github.com/LongNguyen04064",
            icon: "/icons/github.png",
        },
        {
            title: "LOCATION",
            value: "Ho Chi Minh City, Vietnam",
            href: "#",
            icon: null,
        },
    ]

  return (
    <section id='contact' className='relative overflow-hidden border-t border-slate-300 dark:border-slate-600 bg-blue-50 dark:bg-slate-950 py-24 sm:py-32'>
        {/* Background decorations */}
        <div className='pointer-events-none absolute inset-0 bg-blue-200/20 dark:bg-blue-900/20'/>
        <div className='pointer-events-none absolute -top-40 -right-40 w-125 h-125 rounded-full bg-blue-200/20 dark:bg-blue-900/20 blur-3xl'/>
        <div className='pointer-events-none absolute -bottom-50 -left-50 w-112.5 h-112.5 rounded-full bg-blue-200/20 dark:bg-blue-900/20 blur-3xl'/>
        <Reveal>
        {/* Main content container */}
        <div className='relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10'>
            <Reveal>
                <div className='mb-6 lg:mb-20'>
                    <p className='font-mono text-xs text-blue-600 tracking-widest uppercase mb-3'>04. contact</p>
                    <div className='flex items-end justify-between flex-wrap gap-5'>
                        <h2 className='text-5xl font-bold tracking-tight sm:text-6xl'>Let's Build
                            <br/>
                            <span className='text-blue-600'>Something Great</span>
                        </h2>
                    </div>
                    <div className='mt-5 h-px w-50 bg-linear-to-r from-blue-500 to-transparent'></div>
                </div>
            </Reveal>
            {/* Contact information layout */}
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-16'>
                {/* Introduction text */}
                <div className='flex flex-col'>
                    <Reveal> 
                        <p className='max-w-7xl text-xl text-muted-foreground leading-relaxed mb-8'>
                            Open to product engineering roles, freelance builds, and collaboration on motion-heavy web experiences.
                        </p>
                    </Reveal>
                    {/* Contact links */}
                    <div className='mt-8 flex flex-col gap-3'>
                        {contactItems.map((item) => (
                            <a key={item.title} 
                               href={item.href}
                               target='_blank'
                               rel="noopener noreferrer"
                               className='group flex min-h-19.5 items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:hover:shadow-slate-800'>
                                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-600 transition-all duration-300 group-hover:bg-blue-100'>{/* Contact icon */}
                                    {item.icon ? (
                                        <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={22}
                                        height={22}
                                        className='h-5 w-5 object-contain dark:brightness-0 dark:invert'/>
                                    ) :(
                                        <MapPin className='h-5 w-5 text-orange-500'/>
                                    )}
                                </div>
                                {/* Contact details */}
                                <div className="min-w-0 flex-1"> 
                                    <p className=" font-mono text-[11px] tracking-[0.2em] text-slate-500 dark:text-slate-400">
                                        {item.title}
                                    </p>
                                    <p className="mt-1 truncate text-sm font-semibold text-slate-800 sm:text-base dark:text-slate-300">
                                        {item.value}
                                    </p>
                                </div>
                                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1g roup-hover:-translate-y-1 group-hover:text-blue-500"/>
                            </a>
                        ))}
                    </div>
                    {/* Contact footer note */}
                    <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
                        <Mail className='h-4 w-4'/>
                        <span>
                            Feel free to reach out anytime.
                        </span>
                    </div>
                </div>
                {/* Contact form container */}
                <div className='rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-6 shadow-lg shadow-slate-200/60 dark:shadow-slate-800 sm:p-8 lg:p-10'>
                    <div className='mb-7 flex items-center gap-3'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-600 transition-all duration-300 group-hover:bg-blue-100'>
                            <Mail className='h-5 w-5 text-slate-400 dark:text-slate-300 dark:brightness-0 dark:invert'/>
                        </div>
                        <div>
                            <p className='font-mono text-xs font-semibold tracking-[0.15em] text-blue-500 uppercase'>send a message</p>
                        </div>
                    </div>
                    {/* Message form */}
                    <form onSubmit={handelSubmit} className='space-y-5'>
                        {/* Name and email inputs */}
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <div>
                                <input 
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder='Your Name'
                                    className='w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-4 py-3.5 font-mono text-sm text-slate-700 dark:text-slate-400 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50'>
                                </input>
                            </div>
                            <div>
                                <input 
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder='Email Address'
                                    className='w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-4 py-3.5 font-mono text-sm text-slate-700 dark:text-slate-400 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50'>
                                </input>
                            </div>
                        </div>
                        {/* Message input */}
                        <div className='relative'>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                maxLength={500}
                                placeholder="Your Message"
                                className="min-h-42.5 w-full resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-4 py-4 font-mono text-sm leading-7 text-slate-700 dark:text-slate-400 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"/>
                                
                            <div className='pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] text-slate-400'>
                                {form.message.length}/500
                            </div>
                        </div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-semibold transition-all duration-300
                                ${
                                    isFormValid
                                        ? `cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 dark:shadow-slate-600 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl`
                                        : `cursor-not-allowed bg-slate-200 dark:bg-slate-600 text-slate-400 dark:text-slate-300 shadow-sm dark:shadow-slate-700`
                                }
                            `}
                        >
                            <Send className="h-4 w-4" />
                            Send Message
                        </button>
                        <p className='text-center font-mono text-[10px] leading-6 text-slate-400'>
                            No spam. Direct reply from Long within 24h
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </Reveal>
    </section>
  )
}
