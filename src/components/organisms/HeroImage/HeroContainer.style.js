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
    ${ifProp(
        "fullscreen",
        css`
            height: calc(100vh - ${Measurements.headerHeight});
        `
    )};
    min-width: 100%;
    min-height: 600px;
    position: relative;
    display: flex;
    box-sizing: border-box;
    margin-bottom: ${Measurements.sectionMargin};
    overflow: hidden;

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
        z-index: ${Depths.default};
        filter: blur(3px);
        ${loadedImageCss};
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
        z-index: ${Depths.default};
    }

    @media (${MediaBreakpoints.tablet}) {
        margin-bottom: ${Measurements.sectionMargin_t};
    }
`;
