// @flow

// node_modules
import { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

// Constants
import { Measurements, MediaBreakpoints } from "Base/Constants";

export default css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};
    margin-top: ${Measurements.sectionMargin};
    margin-bottom: ${Measurements.sectionMargin};
    background-color: ${ifProp("bgColor", prop("bgColor"), "transparent")};

    @media (${MediaBreakpoints.tablet}) {
        flex-direction: row;
        padding-left: ${Measurements.hPadding};
        padding-right: ${Measurements.hPadding};
        margin-top: ${Measurements.sectionMargin_t};
        margin-bottom: ${Measurements.sectionMargin_t};
    }
`;
