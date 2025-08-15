import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
   const {auth } = usePuterStore();
   const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])
  return<main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <NavBar/>
    
    <section className="main-section">
       <div className="page-heading">
        <h1>Track Your Application & Resume Rating</h1>
        <h2> Review your submissions and check AI-powered feedback.</h2>
       </div>
        {resumes.length > 0 && (
    <div className="resume-section">
   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {resumes.map((resume) => (
    <ResumeCard key={resume.id} resume={resume} />
  ))}
</div>

  </div>
)}
    </section>
   </main>;
}
