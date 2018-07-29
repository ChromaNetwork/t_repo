// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements } from "Base/Constants";

export default css`
    align-self: center;
    justify-content: center;
    margin-top: ${Measurements.headerHeight};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};
    background-color: rgba(0, 0, 0, 0.5);
`;
