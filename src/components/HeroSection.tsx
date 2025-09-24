import Styles from "../Styles";
import PrimaryButton from "./buttons/PrimaryButton";
import TertiaryButton from "./buttons/TertiaryButton";
import SocialButton from "./SocialButton";

const HeroSection = () => {
    return (
        <div className={Styles.heroSectionContainer}>
            <h4 className="dm-serif-text text-[20px] font-regular leading-none text-[var(--text-primary)]">Hi, I'm</h4>
            <h1 className="dm-serif-text text-[90px] font-bold leading-none text-[var(--text-primary)]">Adrian Tan</h1>
            <div className="max-w-[40%] mt-2 mb-6">
                <p className="dm-serif-text text-semibold text-[16px] text-[var(--text-secondary)]">an aspiring full-stack developer and data scientist with a passion for machine learning and data analysis, looking to apply and grow my skills through real-world projects.</p>
            </div>
            
            <div className="flex gap-x-6 mb-10">
                <PrimaryButton text="About Me" disabled={false} height="52px"/>
                <TertiaryButton text="Download CV →" fontSize="16px"/>
            </div>

            <p className={Styles.body}>Follow Me</p>

            {/* External Link Icons */}
            <div className="flex gap-x-4 mt-2">
                <SocialButton href="https://www.linkedin.com/in/dreyyan/" src="linkedin-icon.svg" alt="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--icon-color)]" fill="currentColor">
                    <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"/>
                    </svg>
                </SocialButton>
                <SocialButton href="https://github.com/dreyyan" src="github-icon.svg" alt="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--icon-color)]" fill="currentColor">
                    <path d="M12,2C6.48,2 2,6.48 2,12C2,16.42 5.07,20.17 9.26,21.5C9.76,21.58 9.97,21.27 9.97,21.01C9.97,20.78 9.96,20.17 9.96,19.4C7,19.91 6.22,18.49 6.22,18.49C5.68,17.42 5,17.12 5,17.12C4,16.54 5.08,16.55 5.08,16.55C6.18,16.63 6.76,17.71 6.76,17.71C7.74,19.34 9.34,18.91 10,18.66C10.08,17.94 10.36,17.47 10.67,17.21C7.9,16.94 5.03,15.94 5.03,11.36C5.03,10.07 5.5,9.02 6.28,8.22C6.17,7.94 5.76,6.72 6.36,5.05C6.36,5.05 7.28,4.74 9.96,6.31C10.82,6.07 11.74,5.94 12.66,5.94C13.58,5.94 14.5,6.07 15.36,6.31C18.04,4.74 18.96,5.05 18.96,5.05C19.56,6.72 19.15,7.94 19.04,8.22C19.82,9.02 20.29,10.07 20.29,11.36C20.29,15.95 17.41,16.93 14.63,17.2C15.03,17.55 15.39,18.25 15.39,19.34C15.39,20.94 15.37,21.85 15.37,21.99C15.37,22.25 15.57,22.57 16.08,22.49C20.27,21.16 23.34,17.42 23.34,12C23.34,6.48 18.52,2 12,2Z"/>
                    </svg>
                </SocialButton>
                <SocialButton href="mailto:adriandominic.tan@wvsu.edu.ph" src="mail-icon.svg" alt="Gmail">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--icon-color)]" fill="currentColor">
                    <path d="M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
                    </svg>
                </SocialButton>
            </div>
        </div>
    );
};

export default HeroSection;