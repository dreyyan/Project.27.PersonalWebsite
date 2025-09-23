import Styles from "../Styles";

interface SocialButtonProps {
    href?: string;
    src?: string;
    alt: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ href, src, alt }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="border w-14 h-14 rounded-full cursor-pointer">
            <img src={src} alt={alt} className="w-6 h-6"/>
        </a>
    );
};

export default SocialButton;