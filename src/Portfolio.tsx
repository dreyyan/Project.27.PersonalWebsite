import Header from "./components/Header";

// Components
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";
import MiniProjects from "./components/MiniProjects";

const Portfolio = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Header/>
            {/*  */}
            <div className="flex justify-center items-center w-[80%] h-20 bg-white my-10">
                <h2 className="text-2xl font-bold">Projects</h2>
            </div>
            {/* Projects Section */}
            <div className="flex flex-wrap justify-center items-start gap-6 w-full py-20 px-20">
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </div>
            {/*  */}
            <div className="flex justify-center items-center w-[80%] h-20 bg-white my-10">
                <h2 className="text-2xl font-bold">Mini-Projects</h2>
            </div>
            {/* Mini-Projects Section */}
            <div className="flex flex-wrap justify-center items-start gap-6 w-full px-4">
                {MiniProjects.map((miniProject, index) => (
                    <ProjectCard key={index}
                    src={miniProject.src}
                    title={miniProject.title}
                    description={miniProject.description}
                    codeUrl={miniProject.codeUrl}/>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;