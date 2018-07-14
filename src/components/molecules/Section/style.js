// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements, MediaBreakpoints } from "Base/Constants";

export default css`
    display: flex;
    flex-direction: column;
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    @media (${MediaBreakpoints.tablet}) {
        padding-left: ${Measurements.hPadding};
        padding-right: ${Measurements.hPadding};
    }
`;
