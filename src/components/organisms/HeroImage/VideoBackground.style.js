// @flow

// node_modules
import { css } from "styled-components";
import { ifProp } from "styled-tools";

// Constants
import { Depths, MediaBreakpoints } from "Base/Constants";

export default css`
    background: black;
    user-select: none;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
    opacity: ${ifProp("videoStarted", 1, 0)};
    transition: opacity 0.5s ease-in;
    position: absolute;
    overflow: hidden;
    ${ifProp(
        "fullscreen",
        css`
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

    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Depths.default};

        ${ifProp(
            "fullscreen",
            css`
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

    & iframe: {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;

        ${ifProp(
            "fullscreen",
            css`
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
`;
