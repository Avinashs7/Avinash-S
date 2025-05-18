'use client'
import { useEffect, useState } from 'react';
import { Data } from '@/types/data';
import { Navbar } from "@/components/navbar"
import { Intro } from '@/components/intro';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';
import { Achievements } from '@/components/achievements';
import { Education } from '@/components/education';
import { Contact } from '@/components/contact';

export default function Portfolio() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/avinash.json'); 
      const json:Data = await res.json();
      console.log(json)
      setData(json);
    };
    fetchData();
  }, []);

  return (
    
    <div className="min-h-screen bg-background">
      
      <Navbar data={data}/>

      <main className="container p-3 py-10 md:py-16">
        
        <Intro data={data}/>

        <section id="work" className="py-10 md:py-16 space-y-12">
          <h2 className="text-3xl font-bold tracking-tight">My Work</h2>
          <div className="space-y-4">
            
            <h3 className="text-2xl font-semibold">Professional Journey</h3>
            <Experience data={data}/>
            
          </div>

          <Projects data={data}/>
        </section>

        <section id="background" className="py-10 md:py-16 space-y-12">
          <h2 className="text-3xl font-bold tracking-tight">Background</h2>

          <Education data={data}/>

          <Achievements data={data}/>
          
        </section>

        <Contact data={data}/>
      </main>

      <Footer data={data}/>      
    </div>
  )
}
