import Header from "./components/Header";

// Components
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";

const Portfolio = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-wrap justify-center items-center gap-x-2">
                {Projects.map((project, index) => (
                    <ProjectCard key={index}
                    src={project.src}
                    title={project.title}
                    description={project.description}
                    codeUrl={project.codeUrl}/>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;