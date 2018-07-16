// @flow

// node_modules
import { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

// Constants
import { Measurements, Depths } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

export default css`
    background-color: ${ifProp("heroFloat", "transparent", prop(ThemeProps.black))};
    height: ${Measurements.headerHeight};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};
    display: flex;
    position: ${ifProp("heroFloat", "absolute", "relative")};
    width: 100%;
    z-index: ${Depths.highest};
`;
