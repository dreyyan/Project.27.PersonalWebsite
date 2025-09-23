interface SecondaryButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, onClick, disabled = false }) => {
    return (
        <button
            onClick={disabled ? undefined : onClick}
            className={`
                flex justify-center items-center

                w-[140px] h-[46px]
                mx-[2%] my-[1%]
                px-[2%] py-[1%]

                border-2
                rounded-lg

                bg-[var()]
                border-[var(--color-text)]
                text-[var(--color-text)]

                dm-serif-display
                text-[20px]
                font-regular

                duration-200 ease-in-out

                transition
                hover:bg-gray-200
                hover:border-gray-600
                hover:text-black
                hover:decoration-underline

                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
        >
            <p className="text-xl">{text}</p>
        </button>
    );
}

export default SecondaryButton;