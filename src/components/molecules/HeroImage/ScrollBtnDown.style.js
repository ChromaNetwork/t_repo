// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { Depths, Measurements } from "Base/Constants";

export default css`
    cursor: pointer;
    color: ${prop(ThemeProps.white)};
    z-index: ${Depths.high};
    position: absolute;
    bottom: ${Measurements.basePadding};
    width: 100%;
`;
