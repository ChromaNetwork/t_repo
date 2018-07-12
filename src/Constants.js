// @flow

export const FontFamily: string = "Mukta Malar";

export const Colors: { [key: string]: string } = {
    darkPurple: "#7C3B67",
    lightPurple: "#A5508F",
    darkBlue: "#223C4C",
    lightBlue: "#4B6F81",
    black: "#36393E",
    white: "#FFFFFF",
    darkGray: "#454545",
    accentBlue: "#8FC4C9"
};

export const Measurements: { [key: string]: string } = {
    basePadding: "24px"
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
    opportunities: "/opportunities"
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

export const HeaderLinks: Array<{ label: string, urls: Array<string> }> = [
    { label: "Home", urls: [Paths.home] },
    { label: "About", urls: [Paths.about] },
    { label: "Downloads", urls: [Paths.downloads] },
    { label: "Opportunities", urls: [Paths.opportunities] },
    { label: "Explorer", urls: [ExternalLinks.explorer] },
    { label: "Store", urls: [ExternalLinks.store] }
];
