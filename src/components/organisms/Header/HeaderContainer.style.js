// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { Measurements, Depths } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

export default css`
    background-color: ${prop(ThemeProps.white)};
    height: ${Measurements.headerHeight};
    display: flex;
    position: fixed;
    width: 100%;
    z-index: ${Depths.highest};
    box-sizing: border-box;
    top: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
