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
    | "white";

type ThemePropsType = {
    primaryColor: mixed,
    secondaryColor: mixed,
    tertiaryColor: mixed,
    accentLightColor: mixed,
    accentDarkColor: mixed,
    black: mixed,
    white: mixed
};

// Exists solely to prevent fatfinger typos for ThemeProps values which are strings representing the theme prop values in all themed components.
const ThemeNames: { [key: ThemePropNames]: ThemePropNames } & ThemePropsType = {
    primaryColor: "primaryColor",
    secondaryColor: "secondaryColor",
    tertiaryColor: "tertiaryColor",
    accentLightColor: "accentLightColor",
    accentDarkColor: "accentDarkColor",
    black: "black",
    white: "white"
};

export const ThemeProps: { [key: ThemePropNames]: any } & ThemePropsType = {
    primaryColor: `theme.${ThemeNames.primaryColor}`,
    secondaryColor: `theme.${ThemeNames.secondaryColor}`,
    tertiaryColor: `theme.${ThemeNames.tertiaryColor}`,
    accentLightColor: `theme.${ThemeNames.accentLightColor}`,
    accentDarkColor: `theme.${ThemeNames.accentDarkColor}`,
    black: `theme.${ThemeNames.black}`,
    white: `theme.${ThemeNames.white}`
};

export default ({
    accentDarkColor: Colors.darkBlue,
    accentLightColor: Colors.lightBlue,
    tertiaryColor: Colors.accentBlue,
    secondaryColor: Colors.lightPurple,
    primaryColor: Colors.darkPurple,
    black: Colors.black,
    white: Colors.white
}: { [key: ThemePropNames]: any } & ThemePropsType);
