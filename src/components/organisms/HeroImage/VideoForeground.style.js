// @flow

// node_modules
import { css } from "styled-components";

export default css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    @media (min-aspect-ratio: 16/9) {
        height: 300%;
        top: -100%;
    }
    @media (max-aspect-ratio: 16/9) {
        width: 300%;
        left: -100%;
    }
`;
