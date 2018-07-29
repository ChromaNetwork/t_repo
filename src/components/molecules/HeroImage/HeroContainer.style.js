// @flow

// node_modules
import { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

// Constants
import { Depths, MediaBreakpoints } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

const loadedImageCss = css`
    background-image: url(${prop("srcPlaceholder")});
    ${ifProp(
        "loaded",
        css`
            background-image: url(${prop("srcDefault")});
            filter: blur(0px);
            transition: filter 0.6s linear;
        `
    )};
`;

export default css`
    width: 100vw;
    ${ifProp(
        "fullscreen",
        css`
            height: 100vh;
        `
    )};
    min-width: 100vw;
    min-height: 600px;
    position: relative;
    display: flex;
    box-sizing: border-box;

    &::before {
        background-color: black;
        background-size: cover;
        background-position: center;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Depths.lowest};
        filter: blur(3px);
        ${loadedImageCss};
    }

    &::after {
        background: linear-gradient(${prop(ThemeProps.black)}, ${prop(ThemeProps.primaryColor)});
        opacity: 0.5;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Depths.lower};
    }

    @media (${MediaBreakpoints.desktop}) {
        padding-top: 0;
    }
`;
