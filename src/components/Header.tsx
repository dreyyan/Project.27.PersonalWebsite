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
            <div className={Styles.headerBanner}>
                <Link to="/" className="dm-serif-display text-xl font-semibold">
                    Adrian
                </Link>
            </div>
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