import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import SocialButton from "./SocialButton";

const Header = () => {
    const toggleTheme = (): void => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    };

    const openEmailClient = () => {
        window.location.href = "mailto:adriandominic.tan@wvsu.edu.ph";
    };

    return (
        <div className={Styles.headerContainer}>
            {/* Left: Banner */}
            <div className={Styles.headerBanner}>
                <div className="flex flex-col items-end leading-none">
                    <Link to="/" className="dm-serif-display font-semibold text-[40px] text-[var(--text-primary)]">
                        Adrian Tan
                    </Link>
                    <p className="dm-serif-text text-[14px] text-[var(--text-primary)]">
                        Full-stack Developer
                    </p>
                </div>
            </div>
            {/* Right: Navigation Links */}
            <div className={Styles.headerNavigationLinks}>
                <Link to="/About" className={Styles.headerNavigationLink}>About</Link>
                <Link to="/Portfolio" className={Styles.headerNavigationLink}>Portfolio</Link>
                <Link to="/Resume" className={Styles.headerNavigationLink}>Resume</Link>
                <SecondaryButton text="Contact Me" onClick={openEmailClient}/>
                {/* Adaptive Light/Dark Mode Icon */}
                <button className="
                ml-4 cursor-pointer
                p-2 rounded-full
                transition duration-200 ease-in-out
                hover:text-black 
                hover:scale-120 
                hover:rotate-10
                ml-4 cursor-pointer
                " onClick={toggleTheme}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                        role="img"
                        aria-label="Theme toggle"
                    >
                        <style>
                        {`
                            .sun { 
                            fill: none; 
                            stroke: var(--icon-color); 
                            stroke-width: 1.6; 
                            stroke-linecap: round; 
                            }
                            .moon { 
                            fill: var(--icon-color); 
                            }
                        `}
                        </style>
                        <circle className="sun" cx="12" cy="12" r="4" />
                        <path
                        className="moon"
                        d="M17.5 16.5a6.5 6.5 0 1 1-5-10.5 8 8 0 1 0 5 10.5z"
                        opacity="0.9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;