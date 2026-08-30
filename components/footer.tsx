"use client"

import Image from 'next/image'

export default function Footer() {
    const socialItems = [
        {
            src: "/icons/github.png",
            href: "https://github.com/LongNguyen04064",
            alt: "GitHub",
        },
        {
            src: "/icons/mail1.png",
            href: "mailto:ntlong058@gmail.com",
            alt: "Email",
        },
        {
            src: "/icons/linkedin.png",
            href: "https://www.linkedin.com/in/ntlong0406/",
            alt: "LinkedIn",
        },
    ]

    return (
        <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 px-6 py-10">
            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
                    <div className="flex flex-col items-center gap-1 md:items-start">
                        <div className="group cursor-pointer font-mono text-sm font-bold tracking-wider">
                            <span className=" bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                &lt;
                            </span>
                            <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
                                NTL
                            </span>
                            <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                /&gt;
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 sm:text-sm">
                            © 2026 Nguyễn Thái Long
                        </p>
                    </div>
                    <div className="order-3 text-center md:order-2">
                        <p className="text-xs text-slate-500 sm:text-sm">
                            Built with Next.js & Tailwind CSS
                        </p>
                    </div>
                    <div className="order-2 flex items-center gap-3 md:order-3">
                        {socialItems.map((item) => (
                            <a
                                key={item.alt}
                                href={item.href}
                                target='_blank'
                                rel="noopener noreferrer"
                                aria-label={item.alt}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}