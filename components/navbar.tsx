import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin} from "lucide-react"
import { Data } from '@/types/data'

interface NavbarProps {
  data: Data|undefined;
}

export function Navbar({data}:NavbarProps){
    
    return (
        <>
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
          
          <div className="font-medium indent-10">
            <Link href="/" className="text-xl font-semibold">
              {data?.project_name}
            </Link>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
              About
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
              Work
            </Link>
            <Link
              href="#background"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
              Background
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-6 pr-6">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
    )
}