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
    TaoLogo75: ImageSource
} = {
    heroBg: { srcDefault: HeroBg, srcPlaceholder: HeroBgPre },
    heroBg2: { srcDefault: HeroBg2, srcPlaceholder: HeroBg2Pre },
    TaoLogoBig: { srcDefault: TaoLogoBig, srcPlaceholder: "" },
    panorama: { srcDefault: Panorama, srcPlaceholder: PanoramaPre },
    TaoLogoFull: { srcDefault: TaoLogoFull, srcPlaceholder: "" },
    TaoLogo250: { srcDefault: TaoLogo250, srcPlaceholder: "" },
    TaoLogo75: { srcDefault: TaoLogo75, srcPlaceholder: "" }
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
    darkPurple: "#872964",
    lightPurple: "#BD3A93",
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
    sourceCode: string,
    discordInvite: string,
    slackInvite: string,
    store: string,
    github: string
} = {
    exchange: "https://c-cex.com/?p=xto-btc",
    explorer: "http://taoexplorer.com/",
    sourceCode: "https://github.com/taoblockchain/tao-core",
    discordInvite: "https://discord.gg/6nNdQC7",
    slackInvite: "https://tao11.typeform.com/to/ws8MgM",
    store: "https://teespring.com/stores/tao-blockchain",
    github: "https://www.github.com"
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
    { icon: "Twitter", url: ExternalLinks.slackInvite },
    { icon: "Facebook", url: ExternalLinks.slackInvite },
    { icon: "Youtube", url: ExternalLinks.slackInvite },
    { icon: "Github", url: ExternalLinks.slackInvite }
];

export type PartnerLink = {
    label: string,
    logoUrl: string,
    url?: string
};

export const PartnerLinks: Array<PartnerLink> = [
    { label: "Partner1", logoUrl: ImageAssets.TaoLogo250.srcDefault, url: "https://www.google.com" },
    { label: "Partner2", logoUrl: PlaceholderImageUrls.irregular, url: "https://www.google.com" },
    { label: "Partner3", logoUrl: PlaceholderImageUrls.large, url: "https://www.google.com" },
    { label: "Partner6", logoUrl: ImageAssets.TaoLogo250.srcDefault, url: "https://www.google.com" },
    { label: "Partner5", logoUrl: PlaceholderImageUrls.large, url: "https://www.google.com" },
    { label: "Partner7", logoUrl: ImageAssets.TaoLogo250.srcDefault, url: "https://www.google.com" },
    { label: "Partner8", logoUrl: PlaceholderImageUrls.large, url: "https://www.google.com" },
    { label: "Partner9", logoUrl: ImageAssets.TaoLogo250.srcDefault, url: "https://www.google.com" },
    { label: "Partner10", logoUrl: PlaceholderImageUrls.large, url: "https://www.google.com" },
    { label: "Partner11", logoUrl: PlaceholderImageUrls.large, url: "https://www.google.com" }
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
    }
];
