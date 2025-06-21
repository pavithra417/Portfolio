import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
        id:1,
        Title:"Ecommerce page",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, recusandae!",
        image:"/ProjectSS/Project1.png",
        tags:["React","Tailwind CSS", "Material UI"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:2,
        Title:"Ecommerce Dashboard",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, recusandae!",
        image:"/ProjectSS/Project2.png",
        tags:["HTML/CCS","Tailwind CSS", "Material UI"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:3,
        Title:"Restaurent page",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, recusandae!",
        image:"/ProjectSS/Project3.png",
        tags:["Next.js","Tailwind CSS", "Material UI"],
        demoUrl:"#",
        githubUrl:"#",
    },
    
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
                     ex atque amet totam consequatur nesciunt obcaecati odit recusandae rerum itaque.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.Title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground bg-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                                <h3 className="text-xl font-semibold mb-2">{project.Title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                        <a href={project.githubUrl}target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" href="github.com/pavithra417">
                        Check My Github <ArrowRight size={16}/>
                    </a>

                </div>
            </div>


        </section>
    )
}