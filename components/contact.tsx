import Link from "next/link"
import { Github, Linkedin, Mail ,Twitter} from "lucide-react"
import { Data } from "@/types/data"

interface ContactProps{
    data:Data|undefined;
}

export function Contact({data}:ContactProps){
    return (
        <>
            <section id="contact" className="py-10 md:py-16 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-muted/40 p-6 rounded-lg">
                <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-2">
                    <p className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" /> {data?.gmail}
                    </p>
                    <p>Based in Bengaluru, India</p>
                    <p className="text-muted-foreground">Available for remote work</p>
                </div>
                <div className="pt-4 flex gap-4">
                    <Link
                    href={data?.github_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                    href={data?.twitter_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                    href={data?.linkedin_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
                </div>
                <div className="space-y-4">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <p className="text-muted-foreground">
                    Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>
                <Link
                    href={"mailto:"+data?.gmail}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                </Link>
                </div>
            </div>
            </section>
        </>
    )
}