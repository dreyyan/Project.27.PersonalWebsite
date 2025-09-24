interface PrimaryButtonProps {
    text: string,
    onClick?: () => void;
    disabled: boolean;
    href?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, onClick, disabled = false, href}) => {
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
        <button className="
        flex justify-center items-center

        w-[150px] h-[52px]
        mx-[0] my-[0]
        px-[0] py-[0]

        rounded-full

        bg-[var(--accent-color1)]
        text-white

        dm-serif-display
        text-[24px]
        font-semibold

        duration-200 ease-in-out

        transition
        hover:bg-gray-100
        hover:border-red
        hover:text-black

        transform 
        hover:scale-105 
        hover:rotate-1 
        
        cursor-pointer
        ">{text}
        </button>
    );
}

export default PrimaryButton;