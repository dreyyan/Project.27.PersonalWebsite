import Styles from "../Styles";
import PrimaryButton from "./buttons/PrimaryButton";
import TertiaryButton from "./buttons/TertiaryButton";
import SocialButton from "./SocialButton";

const HeroSection = () => {
    return (
        <div className={Styles.heroSectionContainer}>
            <h4 className="dm-serif-text text-[28px] text-[var(--text-primary)]">Hi, I'm</h4>
            <h1 className="dm-serif-text text-[90px] text-[var(--text-primary)]">Adrian Tan</h1>
            <p className="dm-serif-text text-[16px] text-[var(--text-primary)]">an aspiring full-stack developer and data scientist with a passion for machine learning and data analysis, looking to apply and grow my skills through real-world projects.</p>
            
            <div className="flex">
                <PrimaryButton text="About Me" disabled={false}/>
                <TertiaryButton text="Download CV →"/>
            </div>

            <p className={Styles.body}>Follow Me</p>

            {/* External Link Icons */}
            <div className="flex gap-x-4">
                <SocialButton href="https://www.linkedin.com/in/dreyyan/" src="linkedin-icon.png" alt="LinkedIn"/>
                <SocialButton href="https://github.com/dreyyan" src="github-icon.png" alt="GitHub"/>
                <SocialButton href="mailto:adriandominic.tan@wvsu.edu.ph" src="gmail-icon.png" alt="Gmail"/>
            </div>
        </div>
    );
};

export default HeroSection;