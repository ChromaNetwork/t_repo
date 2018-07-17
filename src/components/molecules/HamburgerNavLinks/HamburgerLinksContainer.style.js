// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { MediaBreakpoints, Measurements, Depths } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

export default css`
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${prop(ThemeProps.black)};
    z-index: ${Depths.highest};
    display: flex;
    flex-direction: column;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};
    padding: ${Measurements.basePadding};
    overflow: hidden;

    @media (${MediaBreakpoints.desktop}) {
        display: none;
    }
`;
