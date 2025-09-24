import Styles from "../Styles";
import PrimaryButton from "./buttons/PrimaryButton";
import TertiaryButton from "./buttons/TertiaryButton";

import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
    src?: string;
    title: string;
    description?: string;
    previewUrl?: string;
    codeUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, previewUrl, codeUrl }) => {
    return (
        <div className={Styles.projectCardContainer}>
            {/* Top: Image */}
            <img src={src} className="w-auto"/>

            {/* Bottom: Details */}
            <div className="h-[156px] px-4 py-2 bg-[var(--secondary-background)]">
                <h4 className="dm-serif-display text-[18px] leading-loose text-[var(--text-primary)]">{title}</h4>
                <p className="dm-serif-text text-[13px] leading-none text-[var(--text-secondary)]">{description}</p>
                <div className="flex">
                    <PrimaryButton text="Preview" disabled={false} href={previewUrl} />
                    <TertiaryButton text="View Code" href={codeUrl}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;