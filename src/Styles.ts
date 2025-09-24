const Styles = {
    // Container
    headerContainer:
    "flex justify-between items-center w-full h-[116px] px-[40px] py-[35px] bg-[var(--secondary-background)]",
    heroSectionContainer:
    "flex flex-col w-auto h-auto mx-[74px] my-[45px] px-[0px] py-[0px] bg-[var(--primary-background)]",

    // Subcontainer
    headerBanner:
    "w-[200px] bg-[var(--color-text)]",
    headerNavigationLinks:
    "flex items-center space-x-[55px]",

    // Text
    headerNavigationLink:
    "relative cursor-pointer dm-serif-text text-[20px] text-[var(--text-primary)] transition ease-in-out before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:transition-all before:duration-300 hover:before:w-full",
    body:
    "dm-serif-text text-[var(--text-primary)]",

    // Components
    projectCardContainer: "flex flex-col justify-end w-[240px] h-[300px] mx-8 my-4 px-1 py-2 rounded-[14px] bg-[var(--primary-background)]",
};

export default Styles;