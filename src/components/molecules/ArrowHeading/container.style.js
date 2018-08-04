// @flow

// node_modules
import { css } from "styled-components";
import { ifProp } from "styled-tools";

// Constants
import { Measurements, MediaBreakpoints } from "Base/Constants";

export default css`
    display: flex;
    padding-top: 48px;
    margin-left: ${ifProp({ align: "left" }, Measurements.basePadding, 0)};

    margin-right: ${ifProp({ align: "right" }, Measurements.basePadding, 0)};
    overflow: hidden;

    @media (${MediaBreakpoints.tablet}) {
        flex-direction: row;
        margin-left: ${ifProp({ align: "left" }, Measurements.hPadding, 0)};
        margin-right: ${ifProp({ align: "right" }, Measurements.hPadding, 0)};
    }
`;
