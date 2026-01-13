import Styles from "../Styles";
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import SecondaryButton from "./buttons/SecondaryButton";

const Header = () => {
    // States
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Handles
    const handleBurgerMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const openEmailClient = () => {
        window.location.href = "mailto:adriandominic.tan@wvsu.edu.ph";
    };

    return (
        <div className="flex justify-between items-center w-full h-[4rem] px-[2rem] py-[1rem] bg-[var(--secondary-background)]">
            {/* Left: Banner */}
            <div className="w-[20%] h-full flex items-center justify-center bg-[var(--color-text)]">
            </div>

            {/* Right (Mobile): Burger Menu */}
            <button className="cursor-pointer md:hidden" onClick={handleBurgerMenu}>
                <img src="burger-menu-icon.svg" className="size-8"/>
            </button>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[4rem] left-0 w-full h-full bg-[var(--secondary-background)]/90 flex flex-col justify-center items-center py-4 md:hidden">
                    <Link to="/About" className={Styles.headerNavigationLink}>About</Link>
                    <Link to="/Portfolio" className={Styles.headerNavigationLink}>Portfolio</Link>
                    <Link to="/Resume" className={Styles.headerNavigationLink}>Resume</Link>
                </div>
            )}

            {/* Right: Navigation Links */}
            <div className="flex">
                <div className="geo-regular hidden md:flex items-center space-x-[16%]">
                    <Link to="/About" className={Styles.headerNavigationLink}>About</Link>
                    <Link to="/Portfolio" className={Styles.headerNavigationLink}>Portfolio</Link>
                    <Link to="/Resume" className={Styles.headerNavigationLink}>Resume</Link>
                </div>
                <SecondaryButton text="Contact Me" onClick={openEmailClient}/>
            </div>
        </div>
    );
};

export default Header;