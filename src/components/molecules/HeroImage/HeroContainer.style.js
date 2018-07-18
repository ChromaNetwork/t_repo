// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { Depths, Measurements, MediaBreakpoints } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

export default css`
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 600px;
    position: relative;
    display: flex;
    box-sizing: border-box;
    padding-top: ${Measurements.headerHeightPadding};

    &::before {
        background-image: url(${prop("srcDefault")});
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
        background: linear-gradient(${prop(ThemeProps.black)}, ${prop(ThemeProps.primaryColor)});
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

    @media (${MediaBreakpoints.desktop}) {
        padding-top: 0;
    }
`;
