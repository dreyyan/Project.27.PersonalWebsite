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
            <div className="max-h-[200px] px-4 py-6 bg-[var(--secondary-background)]">
                <h4 className="dm-serif-display text-[18px] leading-none min-h-[40px] mb-4 text-[var(--text-primary)]">{title}</h4>
                <p className="dm-serif-text text-[13px] min-h-[40px] leading-none text-[var(--text-secondary)]">{description}</p>
                <div className="flex justify-around items-center mt-4">
                    <PrimaryButton text="Preview" disabled={false} href={previewUrl} width="121px" height="28px" borderRadius="6px"/>
                    <TertiaryButton text="View Code" href={codeUrl} fontSize="12px"/>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;