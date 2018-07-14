// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Depths } from "Base/Constants";

export default css`
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 600px;
    position: relative;

    &::before {
        background-image: url(${props => props.srcDefault});
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
    }

    &::after {
        background: linear-gradient(${props => props.theme.black}, ${props => props.theme.accentDarkColor});
        opacity: 0.4;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Depths.lower};
    }
`;
