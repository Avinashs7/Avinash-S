import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Globe, ArrowRight } from "lucide-react"
import { Data } from "@/types/data"

interface ProjectProps {
  data: Data | undefined;
}

export function Projects({ data }: ProjectProps) {
  return (
    <div className="space-y-12 py-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="space-y-24">
        {data?.projects?.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full md:w-2/5">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-center justify-center border border-primary/10 shadow-lg">
                <div className="text-center w-full">
                 
                  <div className="relative">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6"></div>
                    <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack?.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {project.description?.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 pt-4">
                {project.code && (
                  <Link
                    href={project.code}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Code className="h-4 w-4" />
                    <span>Source Code</span>
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}