interface TertiaryButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    href?: string;

    fontSize?: string;
    fontWeight?: string;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ text, onClick, disabled = false, href, fontSize = "14px", fontWeight = "400" }) => {
    const style =  { fontSize, fontWeight };

    if (href) {
        return (
            <a
                style={style}
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
        style={style}
            onClick={disabled ? undefined : onClick}
            className={`
                flex justify-center items-center

                h-auto
                mx-[0] my-[0]
                px-[0] py-[0]

                border rounded-lg

                bg-transparent
                border-transparent
                text-[var(--text-secondary)]

                duration-200 ease-in-out

                transition
                hover:text-[var(--text-primary)]
                hover:underline

                transform
                hover:scale-102

                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
        >{text}
        </button>
    );
}

export default TertiaryButton;
