import Link from "next/link"
import { Avatar,AvatarFallback,AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "@/components/ui/badge"
import { Data } from "@/types/data"
import { Mail } from "lucide-react"

interface IntroProps {
  data: Data|undefined;
}

export function Intro({data}:IntroProps){
    return (
        <>
            <section id="about" className="py-10 md:py-16 space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                    <Avatar className="h-64 w-64 border-2 border-border rounded-full relative overflow-hidden">
                        <AvatarImage src="/download.jpeg" alt="Profile" className="object-cover" />
                        <AvatarFallback>Avinash S</AvatarFallback>
                    </Avatar>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Hi, I'm <span className="text-primary">{data?.name}</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-muted-foreground">Software Engineer</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        I'm a passionate software engineer with expertise in full-stack development, problem solving, and
                        building scalable applications. With a strong foundation in multiple programming languages and
                        frameworks, I create efficient solutions to complex problems.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {
                            data?.tech_stack?.map((value,index)=>{
                                return (
                                    <Badge key={index} variant="outline">{value}</Badge>
                                );
                            })
                        }
                    </div>
                    <div className="pt-4 flex gap-4 justify-center md:justify-start">
                        <Link
                        href={"mailto:"+data?.gmail}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                        <Mail className="mr-2 h-4 w-4"  /> Contact Me
                        </Link>
                        <Link
                        href={"https://drive.google.com/uc?export=download&id="+data?.resume}
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        download 
                        >
                        Download Resume
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}