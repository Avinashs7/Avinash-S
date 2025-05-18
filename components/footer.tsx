import { Data } from "@/types/data"
import Link from "next/link"

interface FooterProps{
    data:Data|undefined;
}
export function Footer({data}:FooterProps){
    return (
        <>
            <footer className="border-t">
                <div className="container py-8 flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-muted-foreground">Thanks for scrolling all the way down. Here’s a virtual cookie 🍪.</p>
                </div>
            </footer>
        </>
    )
}