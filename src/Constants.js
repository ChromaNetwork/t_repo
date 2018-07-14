// @flow

export const FontFamily: string = "Mukta Malar";

export const Colors: { [key: string]: string } = {
    darkPurple: "#7C3B67",
    lightPurple: "#A5508F",
    darkBlue: "#223C4C",
    lightBlue: "#4B6F81",
    black: "#000000",
    white: "#FFFFFF",
    darkGray: "#454545",
    accentBlue: "#8FC4C9"
};

export const Measurements: { [key: string]: string } = {
    basePadding: "24px",
    contentHorizontalPadding: "15%",
    headerHeight: "70px",
    nonHeroHeaderHeight: "118px"
};

export const Depths: { [key: string]: number } = {
    lowest: -3,
    lower: -2,
    low: -1,
    default: 0,
    high: 1,
    higher: 2,
    highest: 3
};

export const MediaBreakpoints: { [key: string]: string } = {
    tablet: "min-width: 768px",
    desktop: "min-width: 992px",
    wide: "min-width: 1200px"
};

export const FontSizes: { [key: string]: string } = {
    largeHeading: "54px",
    normalHeading: "36px",
    smallHeading: "30px",
    largeText: "24px",
    normalText: "18px",
    smallText: "14px"
};

export const Paths: { [key: string]: string } = {
    home: "/",
    about: "/about",
    downloads: "/downloads",
    opportunities: "/opportunities",
    contact: "/contact"
};

export const ExternalLinks: { [key: string]: string } = {
    exchange: "https://c-cex.com/?p=xto-btc",
    explorer: "http://taoexplorer.com/",
    sourceCode: "https://github.com/taoblockchain/tao-core",
    discordInvite: "https://discord.gg/6nNdQC7",
    slackInvite: "https://tao11.typeform.com/to/ws8MgM",
    store: "https://teespring.com/stores/tao-blockchain"
};

export type DownloadableFileLink = { name: string, url: string };
export type DownloadableFileLinks = { currentLink: DownloadableFileLink, olderLinks: Array<DownloadableFileLink> };
export const DownloadableFiles: { [key: string]: DownloadableFileLinks } = {
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
