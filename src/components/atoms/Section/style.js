// @flow

// node_modules
import { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

// Constants
import { Measurements, MediaBreakpoints } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

export default css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};
    background-color: ${ifProp("bgColor", prop("bgColor"), prop(ThemeProps.white))};

    @media (${MediaBreakpoints.tablet}) {
        flex-direction: row;
        padding-left: ${Measurements.hPadding};
        padding-right: ${Measurements.hPadding};
    }
`;
