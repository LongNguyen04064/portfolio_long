import Project from "@/components/project";
import Header from "@/components/header";
import Info from "@/components/info";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <Header/>
      <main className="flex-1 pt-16">
        <Info/>
        <Project/>
      </main>
    </div>
  );
}
