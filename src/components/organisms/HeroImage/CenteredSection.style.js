// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Depths, Measurements, MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        flex-direction: column;
        align-self: center;
        justify-content: center;
        padding-top: ${Measurements.basePadding};
        padding-bottom: ${Measurements.basePadding};
        z-index: ${Depths.high};
        width: 100%;

        @media (${MediaBreakpoints.tablet}) {
            align-self: center;
        }
    }
`;
