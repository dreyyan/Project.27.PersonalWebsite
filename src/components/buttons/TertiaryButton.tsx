interface TertiaryButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ text, onClick, disabled = false, href }) => {
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
        <button
            onClick={disabled ? undefined : onClick}
            className={`
                flex justify-center items-center

                w h-auto
                mx-[0] my-[0]
                px-[0] py-[0]

                border rounded-lg

                bg-transparent
                border-transparent
                text-[var(--text-secondary)]

                text-[17px]
                font-semibold

                duration-200 ease-in-out

                transition
                hover:text-[var(--text-primary)]
                hover:underline

                transform
                hover:scale-102

                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
        >
            <p className="text-xl">{text}</p>
        </button>
    );
}

export default TertiaryButton;
