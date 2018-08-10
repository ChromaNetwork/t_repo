// @flow

// node_modules
import { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

// Constants
import { Depths, MediaBreakpoints, Measurements } from "Base/Constants";
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
    width: 100%;
    min-width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    margin-bottom: ${Measurements.sectionMargin};
    overflow: hidden;

    ${ifProp(
        "fullscreen",
        css`
            top: -50px;
            position: relative;
            height: 100vh;
            min-height: 700px;
        `
    )};

    &::before {
        background-size: cover;
        background-position: center;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 500px;
        z-index: ${Depths.default};
        filter: blur(3px);
        ${loadedImageCss};

        ${ifProp(
            "fullscreen",
            css`
                height: 100vh;
                min-height: 700px;
            `
        )};

        @media (${MediaBreakpoints.desktop}) {
            ${ifProp(
                "fullscreen",
                css`
                    height: 100vh;
                    min-height: 800px;
                `
            )};
        }
    }

    &::after {
        background: linear-gradient(${prop(ThemeProps.pureBlack)}, ${prop(ThemeProps.black)});
        opacity: 0.6;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 500px;
        z-index: ${Depths.default};
        ${ifProp(
            "fullscreen",
            css`
                height: 100vh;
                min-height: 700px;
            `
        )};

        @media (${MediaBreakpoints.desktop}) {
            ${ifProp(
                "fullscreen",
                css`
                    height: 100vh;
                    min-height: 800px;
                `
            )};
        }
    }

    @media (${MediaBreakpoints.tablet}) {
        margin-bottom: ${Measurements.sectionMargin_t};
    }

    @media (${MediaBreakpoints.desktop}) {
        ${ifProp(
            "fullscreen",
            css`
                height: 100vh;
                min-height: 800px;
            `
        )};
    }
`;
