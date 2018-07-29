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
    background-color: ${prop(ThemeProps.white)};
    z-index: ${Depths.highest};
    flex-direction: column;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};
    padding: ${Measurements.basePadding};
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media (${MediaBreakpoints.desktop}) {
        display: none;
    }
`;
