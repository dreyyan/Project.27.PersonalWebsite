interface SocialButtonProps {
    href?: string;
    src?: string;
    alt: string;
    children?: React.ReactNode;
};

const SocialButton: React.FC<SocialButtonProps> = ({ href, src, alt, children }) => {
    return (
        <a
        href={href} target="_blank" rel="noopener noreferrer"
        className=" bg-[var(--secondary-background)] flex justify-center items-center w-14 h-14 rounded-full cursor-pointer
        duration-200 ease-in-out transition transform
        hover:bg-gray-500
        hover:scale-110 hover:rotate-4
        ">
            {/* <img src={src} alt={alt} className="w-[60%] h-[60%] text-[var(--icon-color)]"/> */}
            {children}
        </a>
    );
};

export default SocialButton;