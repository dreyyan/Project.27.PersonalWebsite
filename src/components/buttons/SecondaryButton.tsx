interface PrimaryButtonProps {
    text: string,
    onClick?: () => void;
    disabled?: boolean;
    href?: string;

    width?: string;
    height?: string;
    borderRadius?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, onClick, disabled = false, href, width = "150px", height = "32px", borderRadius = "100px"}) => {
    const fontSize = `calc(${height} * 0.5)`;

    const style = { width, height, borderRadius, fontSize };
        if (href) {
        return (
            <a
                href={href}
                className={`btn ${disabled ? "btn-disabled" : ""}`}
                onClick={(e) => disabled && e.preventDefault()}
            >
                {text}
            </a>
        );
    }

    return (
        <button style={style} className="
        flex justify-center items-center

        mx-[0] my-[0]
        px-[0] py-[0]

        bg-[var(--accent-color1)]
        text-white

        dm-serif-display
        font-semibold

        duration-200 ease-in-out

        transition

        hover:bg-[var(--accent-color2)]
        hover:text-white

        transform 
        hover:scale-105 
        hover:rotate-1 
        
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ">{text}
        </button>
    );
}

export default PrimaryButton;