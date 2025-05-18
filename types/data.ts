interface Experience{
    company:string,
    role:string,
    time:string,
    tech_stack:Array<string>,
    description:string,
}
interface Project{
    name:string,
    description:Array<string>,
    time:string,
    thumbnail:string,
    tech_stack:Array<string>,
    code:string,
    demo:string
}
interface Education{
    institute:string,
    qualification:string,
    description:string,
    time:string
}
interface Achievement{
    name:string,
    description:string,
    time:string,
    institute:string
}
export interface Data {
    project_name:string,
    name:string,
    github_url:string,
    linkedin_url:string,
    twitter_url:string,
    tech_stack:Array<string>,
    gmail:string,
    resume:string,
    experience:Array<Experience>,
    projects:Array<Project>,
    education:Array<Education>,
    achievements:Array<Achievement>
}