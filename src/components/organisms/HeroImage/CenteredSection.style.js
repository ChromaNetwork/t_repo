// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Depths, Measurements } from "Base/Constants";

export default css`
    && {
        align-self: center;
        justify-content: center;
        padding-top: ${Measurements.basePadding};
        padding-bottom: ${Measurements.basePadding};
        z-index: ${Depths.high};
        width: 100%;
    }
`;
