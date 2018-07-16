// @flow

export const PlaceholderText: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const PlaceholderImageUrls: {
    square: string,
    wide: string,
    large: string,
    medium: string,
    small: string,
    irregular: string
} = {
    square: "http://via.placeholder.com/150x150",
    wide: "http://via.placeholder.com/3840x2160",
    large: "http://via.placeholder.com/2000x1200",
    medium: "http://via.placeholder.com/1024x768",
    irregular: "http://via.placeholder.com/300x125",
    small: "http://via.placeholder.com/32x32"
};

export const Colors: {
    darkPurple: string,
    lightPurple: string,
    darkBlue: string,
    lightBlue: string,
    black: string,
    white: string,
    darkGray: string,
    accentBlue: string
} = {
    darkPurple: "#7C3B67",
    lightPurple: "#A5508F",
    darkBlue: "#223C4C",
    lightBlue: "#4B6F81",
    black: "#000000",
    white: "#FFFFFF",
    darkGray: "#454545",
    accentBlue: "#8FC4C9"
};

export const Measurements: {
    basePadding: string,
    hPadding: string,
    headerHeight: string,
    headerHeightPadding: string
} = {
    basePadding: "24px",
    hPadding: "15%",
    headerHeight: "70px",
    headerHeightPadding: "118px"
};

export const Depths: {
    lowest: number,
    lower: number,
    low: number,
    default: number,
    high: number,
    higher: number,
    highest: number
} = {
    lowest: -3,
    lower: -2,
    low: -1,
    default: 0,
    high: 1,
    higher: 2,
    highest: 3
};

export const MediaBreakpoints: {
    tablet: string,
    desktop: string,
    wide: string
} = {
    tablet: "min-width: 768px",
    desktop: "min-width: 992px",
    wide: "min-width: 1200px"
};

export const FontSizes: {
    largeHeading: string,
    normalHeading: string,
    smallHeading: string,
    largeText: string,
    normalText: string,
    smallText: string,
    t_largeHeading: string,
    t_normalHeading: string,
    t_smallHeading: string,
    t_largeText: string,
    t_normalText: string,
    t_smallText: string
} = {
    largeHeading: "40px",
    normalHeading: "28px",
    smallHeading: "22px",
    largeText: "18px",
    normalText: "14px",
    smallText: "11px",

    t_largeHeading: "54px",
    t_normalHeading: "36px",
    t_smallHeading: "30px",
    t_largeText: "24px",
    t_normalText: "18px",
    t_smallText: "14px"
};

export const Paths: {
    home: string,
    about: string,
    downloads: string,
    opportunities: string,
    contact: string
} = {
    home: "/",
    about: "/about",
    downloads: "/downloads",
    opportunities: "/opportunities",
    contact: "/contact"
};

export const ExternalLinks: {
    exchange: string,
    explorer: string,
    sourceCode: string,
    discordInvite: string,
    slackInvite: string,
    store: string
} = {
    exchange: "https://c-cex.com/?p=xto-btc",
    explorer: "http://taoexplorer.com/",
    sourceCode: "https://github.com/taoblockchain/tao-core",
    discordInvite: "https://discord.gg/6nNdQC7",
    slackInvite: "https://tao11.typeform.com/to/ws8MgM",
    store: "https://teespring.com/stores/tao-blockchain"
};

export type DownloadableFileLink = { name: string, url: string };
export type DownloadableFileLinks = { currentLink: DownloadableFileLink, olderLinks: Array<DownloadableFileLink> };
export const DownloadableFiles: {
    whitepaper: DownloadableFileLinks,
    macOSWallet: DownloadableFileLinks,
    windowsWallet: DownloadableFileLinks,
    linuxWallet: DownloadableFileLinks
} = {
    whitepaper: { currentLink: { name: "v0.3", url: "http://tao.network/XTORoadmapv0.3.pdf" }, olderLinks: [] },
    macOSWallet: {
        currentLink: { name: "0.10.0.0", url: "https://tao.network/files/Tao-Qt-0.10.0.0.dmg" },
        olderLinks: [{ name: "0.9.2.3", url: "https://tao.network/files/Tao-Qt-0.9.2.3.dmg" }]
    },
    windowsWallet: {
        currentLink: { name: "0.10.0.0", url: "https://tao.network/files/Tao-0.10.0.0-Setup.exe" },
        olderLinks: [{ name: "0.9.2.3", url: "https://tao.network/files/tao-0.9.2.3-win64-setup.exe" }]
    },
    linuxWallet: {
        currentLink: { name: "0.10.0.0", url: "https://tao.network/files/tao-qt-0.10.0.0.tgz" },
        olderLinks: [{ name: "0.9.2.3", url: "https://tao.network/files/tao-linux-0.9.2.3.tgz" }]
    }
};

export type HeaderLink = {
    label: string,
    url: string,
    external?: boolean
};

export const HeaderLinks: Array<HeaderLink> = [
    { label: "Home", url: Paths.home },
    { label: "About", url: Paths.about },
    { label: "Downloads", url: Paths.downloads },
    { label: "Opportunities", url: Paths.opportunities },
    { label: "Contact", url: Paths.contact },
    { label: "Explorer", url: ExternalLinks.explorer, external: true },
    { label: "Store", url: ExternalLinks.store, external: true }
];
