// @flow

import { Colors } from "Base/Constants";

// Flowtyping the names of the themes makes sure that none of the objects here have differing names -- they all need the same name.
// Avoids fat-fingering in defining theme.
type ThemePropNames =
    | "primaryColor"
    | "secondaryColor"
    | "tertiaryColor"
    | "accentLightColor"
    | "accentDarkColor"
    | "black"
    | "white"
    | "pureBlack"
    | "pureWhite";

type ThemePropsType = {
    primaryColor: mixed,
    secondaryColor: mixed,
    tertiaryColor: mixed,
    accentLightColor: mixed,
    accentDarkColor: mixed,
    black: mixed,
    white: mixed,
    pureBlack: mixed,
    pureWhite: mixed
};

// Exists solely to prevent fatfinger typos for ThemeProps values which are strings representing the theme prop values in all themed components.
const ThemeNames: { [key: ThemePropNames]: ThemePropNames } & ThemePropsType = {
    primaryColor: "primaryColor",
    secondaryColor: "secondaryColor",
    tertiaryColor: "tertiaryColor",
    accentLightColor: "accentLightColor",
    accentDarkColor: "accentDarkColor",
    black: "black",
    white: "white",
    pureBlack: "pureBlack",
    pureWhite: "pureWhite"
};

export const ThemeProps: { [key: ThemePropNames]: any } & ThemePropsType = {
    primaryColor: `theme.${ThemeNames.primaryColor}`,
    secondaryColor: `theme.${ThemeNames.secondaryColor}`,
    tertiaryColor: `theme.${ThemeNames.tertiaryColor}`,
    accentLightColor: `theme.${ThemeNames.accentLightColor}`,
    accentDarkColor: `theme.${ThemeNames.accentDarkColor}`,
    black: `theme.${ThemeNames.black}`,
    white: `theme.${ThemeNames.white}`,
    pureBlack: `theme.${ThemeNames.pureBlack}`,
    pureWhite: `theme.${ThemeNames.pureWhite}`
};

export default ({
    accentDarkColor: Colors.darkBlue,
    accentLightColor: Colors.lightBlue,
    tertiaryColor: Colors.accentBlue,
    secondaryColor: Colors.lightPurple,
    primaryColor: Colors.darkPurple,
    black: Colors.black,
    white: Colors.white,
    pureBlack: "#000000",
    pureWhite: "#FFFFFF"
}: { [key: ThemePropNames]: any } & ThemePropsType);
