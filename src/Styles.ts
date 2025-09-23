const Styles = {
    // Container
    headerContainer:
    "flex justify-between items-center w-full h-[116px] px-[40px] py-[35px] bg-[var(--color-secondary)]",
    heroSectionContainer:
    "flex flex-col w-auto h-auto mx-[74px] my-[45px] px-[0px] py-[0px] bg-[var(--color-text)]",

    // Subcontainer
    headerBanner:
    "w-[200px] bg-[var(--color-text)]",
    headerNavigationLinks:
    "flex items-center space-x-[55px]",

    // Text
    headerNavigationLink:
    "relative cursor-pointer dm-serif-text text-[20px] transition ease-in-out before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:bg-[var(--color-text)] before:transition-all before:duration-400 hover:before:w-full",
    body:
    "dm-serif-text "
};

export default Styles;