// @flow

// Assets
import HeroBg from "Assets/herobg.jpg";
import HeroBgPre from "Assets/herobg_pre.jpg";
import HeroBg2 from "Assets/herobg2.jpg";
import HeroBg2Pre from "Assets/herobg2_pre.jpg";
import TaoLogoBig from "Assets/iconwhite.png";
import Panorama from "Assets/panorama.jpg";
import PanoramaPre from "Assets/panorama_pre.jpg";
import TaoLogoFull from "Assets/logo_full.png";
import TaoLogo250 from "Assets/logo_250x250.png";
import TaoLogo75 from "Assets/logo_75x75.png";
import DemLogo from "Assets/dem_logo.png";
import AMLogo from "Assets/am_logo.png";

export const PlaceholderText: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export type ImageSource = {
    srcDefault: string,
    srcPlaceholder: string
    // srcMobile?: string,
    // srcTablet?: string,
    // srcDesktop?: string,
    // srcWide?: string,
};

// Importing all of the images here may cause all images to be loaded unnecessarily -- possibly move them to local imports.
export const ImageAssets: {
    heroBg: ImageSource,
    heroBg2: ImageSource,
    TaoLogoBig: ImageSource,
    panorama: ImageSource,
    TaoLogoFull: ImageSource,
    TaoLogo250: ImageSource,
    TaoLogo75: ImageSource,
    DemLogo: ImageSource,
    AmLogo: ImageSource
} = {
    heroBg: { srcDefault: HeroBg, srcPlaceholder: HeroBgPre },
    heroBg2: { srcDefault: HeroBg2, srcPlaceholder: HeroBg2Pre },
    TaoLogoBig: { srcDefault: TaoLogoBig, srcPlaceholder: "" },
    panorama: { srcDefault: Panorama, srcPlaceholder: PanoramaPre },
    TaoLogoFull: { srcDefault: TaoLogoFull, srcPlaceholder: "" },
    TaoLogo250: { srcDefault: TaoLogo250, srcPlaceholder: "" },
    TaoLogo75: { srcDefault: TaoLogo75, srcPlaceholder: "" },
    DemLogo: { srcDefault: DemLogo, srcPlaceholder: "" },
    AmLogo: { srcDefault: AMLogo, srcPlaceholder: "" }
};

export const Colors: {
    darkPurple: string,
    lightPurple: string,
    darkBlue: string,
    lightBlue: string,
    black: string,
    white: string,
    accentBlue: string
} = {
    darkPurple: "#853569",
    lightPurple: "#B24793",
    darkBlue: "#203548",
    lightBlue: "#7992A3",
    black: "#192028",
    white: "#F8F7FF",
    accentBlue: "#23599F"
};

export const Measurements: {
    basePadding: string,
    hPadding: string,
    headerHeight: string,
    gutter: string,
    sectionMargin: string,
    sectionMargin_t: string
} = {
    basePadding: "24px",
    hPadding: "10%",
    headerHeight: "50px",
    gutter: "12px",
    sectionMargin: "24px",
    sectionMargin_t: "48px"
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
    normalText: "16px",
    smallText: "12px",

    t_largeHeading: "54px",
    t_normalHeading: "36px",
    t_smallHeading: "30px",
    t_largeText: "22px",
    t_normalText: "18px",
    t_smallText: "14px"
};

export const Paths: {
    home: string,
    about: string,
    downloads: string
} = {
    home: "/",
    about: "/about",
    downloads: "/downloads"
};

export const ExternalLinks: {
    exchange: string,
    explorer: string,
    discordInvite: string,
    slackInvite: string,
    store: string,
    github: string,
    reddit: string,
    mail: string
} = {
    exchange: "https://c-cex.com/?p=xto-btc",
    explorer: "https://chainz.cryptoid.info/xto/",
    discordInvite: "https://discord.gg/WBxAnCx",
    slackInvite: "https://tao11.typeform.com/to/ws8MgM",
    store: "https://teespring.com/stores/tao-blockchain",
    github: "https://github.com/taoblockchain/tao-core",
    reddit: "https://www.reddit.com/r/taonetwork/",
    mail: "mailto:info@tao.network"
};

export type DownloadableFileLink = { label: string, url: string };
export type DownloadableFileLinks = { currentLink: DownloadableFileLink, olderLinks: Array<DownloadableFileLink> };
export const DownloadableFiles: {
    whitepaper: DownloadableFileLinks,
    macOSWallet: DownloadableFileLinks,
    windowsWallet: DownloadableFileLinks,
    linuxWallet: DownloadableFileLinks,
    paperWallet: DownloadableFileLinks
} = {
    whitepaper: {
        currentLink: { label: "Whitepaper v0.3", url: "http://tao.network/XTORoadmapv0.3.pdf" },
        olderLinks: []
    },
    macOSWallet: {
        currentLink: { label: "Download 0.10.0.0", url: "https://tao.network/files/Tao-Qt-0.10.0.0.dmg" },
        olderLinks: [{ label: "0.9.2.3", url: "https://tao.network/files/Tao-Qt-0.9.2.3.dmg" }]
    },
    windowsWallet: {
        currentLink: { label: "Download 0.10.0.0", url: "https://tao.network/files/Tao-0.10.0.0-Setup.exe" },
        olderLinks: [{ label: "0.9.2.3", url: "https://tao.network/files/tao-0.9.2.3-win64-setup.exe" }]
    },
    linuxWallet: {
        currentLink: { label: "Download 0.10.0.0", url: "https://tao.network/files/tao-qt-0.10.0.0.tgz" },
        olderLinks: [{ label: "0.9.2.3", url: "https://tao.network/files/tao-linux-0.9.2.3.tgz" }]
    },
    paperWallet: {
        currentLink: { label: "Go To Paper Wallet", url: "https://taoblockchain.github.io/PaperWallet/" },
        olderLinks: []
    }
};

export type Wallet = { name: string, file?: DownloadableFileLinks, iconName: string };
export const Wallets: Array<Array<Wallet>> = [
    [
        { name: "Windows", iconName: "FaWindows", file: DownloadableFiles.windowsWallet },
        { name: "MacOS", iconName: "FaApple", file: DownloadableFiles.macOSWallet },
        { name: "Linux", iconName: "FaLinux", file: DownloadableFiles.linuxWallet }
    ],
    [
        { name: "Paper (Physical)", iconName: "FaTicketAlt", file: DownloadableFiles.paperWallet },
        { name: "iOS", iconName: "FaAppStoreIos" },
        { name: "Android", iconName: "FaAndroid" }
    ]
];

export type HeaderLink = {
    label: string,
    url: string,
    external?: boolean
};

export const HeaderLinks: Array<HeaderLink> = [
    { label: "Home", url: Paths.home },
    { label: "About", url: Paths.about },
    { label: "Downloads", url: Paths.downloads },
    { label: "Github", url: ExternalLinks.github, external: true },
    { label: "Explorer", url: ExternalLinks.explorer, external: true },
    { label: "Store", url: ExternalLinks.store, external: true }
];

export type FooterLink = {
    icon: string,
    url: string
};

export const FooterLinks: Array<FooterLink> = [
    { icon: "Slack", url: ExternalLinks.slackInvite },
    { icon: "FaDiscord", url: ExternalLinks.discordInvite },
    { icon: "FaRedditAlien", url: ExternalLinks.reddit },
    { icon: "Mail", url: ExternalLinks.mail }
];

export type PartnerLink = {
    label: string,
    logoUrl: string,
    url?: string,
    width: string,
    width_t: string,
    width_d: string
};

export const PartnerLinks: Array<PartnerLink> = [
    {
        label: "Partner1",
        logoUrl: ImageAssets.AmLogo.srcDefault,
        url: "http://alt.market",
        width: "300px",
        width_t: "400px",
        width_d: "475px"
    },
    {
        label: "Partner2",
        logoUrl: ImageAssets.DemLogo.srcDefault,
        url: "http://www.dem.capital",
        width: "200px",
        width_t: "250px",
        width_d: "300px"
    }
];

export type Testimonial = {
    sourceName: string,
    sourceTitle: string,
    quote: string
};

export const Testimonials: Array<Testimonial> = [
    {
        sourceName: "Young Dirty",
        sourceTitle: "Son of Ol' Dirty Bastard",
        quote: `"Bitcoin is the future of money and all the fans want a part of the future of Ol’ Dirty Bastard. In the past, Dad’s music was ahead of its time, so it makes sense that he would be ahead of the technology of money now. Tao is how we are going to start."`
    },

    {
        sourceName: "Bryce Weiner",
        sourceTitle: "CEO, AltMarket, Inc.",
        quote: `"Music thrives creatively and financially when it’s in the hands of the artist themselves. By removing the price tag of experimentation, we’re able to deliver for both the artist and their fans."`
    },

    {
        sourceName: "Messiah Jacobs",
        sourceTitle: "Manager, Estate of Russell Jones/ODB",
        quote: `"I’ve been involved with crypto-currency for three years.  When Hakim and Tao approached the Estate of ODB about making a token that fans can enjoy, we saw nothing but a positive outcome.  Four Screens Production is always looking for more deals that align with the spirit of ODB."`
    },

    {
        sourceName: "Carlos Roa",
        sourceTitle: "Founder, Deus Ex Machina Capital",
        quote: `"When it comes to the Tao Network, it's not just about the celebrity starpower or the money; it's about redefining how fans and artists interact with each other. At DEM Capital, we are excited about the opportunities that Tao enables for creative and enterprising individuals who are passionate about music."`
    }
];
