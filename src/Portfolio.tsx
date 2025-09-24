import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

const Portfolio = () => {
    return (
        <div>
            <Header/>
            <div className="">
                <ProjectCard
                src="test.png"
                title="My Historical Journey"
                description="CIPHER R&D Committee Repository: CodeQuest — Sharpen Problem-Solving Skills Step by Step"
                codeUrl="https://github.com/dreyyan/Project.14.MyHistoricalJourney"/>
            </div>
        </div>
    );
};

export default Portfolio;