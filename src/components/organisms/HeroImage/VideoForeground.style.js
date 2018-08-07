// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    @media (min-aspect-ratio: 16/9) {
        width: 550%;
        left: -200%;

        @media (min-width: 400px) {
            width: 420%;
            height: 120%;
            left: -200%;
        }

        @media (${MediaBreakpoints.tablet}) {
            width: 300%;
            left: -100%;
        }

        @media (${MediaBreakpoints.desktop}) {
            height: 110%;
        }
    }
    @media (max-aspect-ratio: 16/9) {
        width: 550%;
        left: -200%;

        @media (min-width: 400px) {
            width: 420%;
            height: 120%;
            left: -200%;
        }

        @media (${MediaBreakpoints.tablet}) {
            width: 300%;
            left: -100%;
        }

        @media (${MediaBreakpoints.desktop}) {
            height: 110%;
        }
    }
`;
