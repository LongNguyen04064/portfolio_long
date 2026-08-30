import Project from "@/components/project";
import Header from "@/components/header";
import Info from "@/components/info";
import Technical from "@/components/technical";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <Header/>
      <div className="fixed right-3 top-20 z-40 sm:right-6 sm:top-24">
        <div className="felx items-center gap-2 rounded-full border border-emerald-200 px-3 py-2 font-mono text-[9px] font-semibold tracking-wider text-emerald-600 shadow-sm backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-widest">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono leading-7 tracking-wide">Available for work</span>
          </div> 
        </div>
      </div>
      <main className="flex-1 pt-16">
        <Info/>
        <Project/>
        <Technical/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
