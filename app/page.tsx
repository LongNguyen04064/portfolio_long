import Project from "@/components/project";
import Header from "@/components/header";
import Info from "@/components/info";
import info from "@/components/info";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <Header/>
      <main className="flex-1 pt-16">
        <Info/>
      </main>
      <section className="py-28 px-6 relative overflow-hidden">
        <Project/> 
      </section>
    </div>
  );
}
