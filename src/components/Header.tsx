import Styles from "../Styles";
import { Link } from "react-router-dom";

// Components
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;