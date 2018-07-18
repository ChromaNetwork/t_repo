// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints, Measurements } from "Base/Constants";

export default css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: ${Measurements.gutter} 0 ${Measurements.gutter} 0;

    @media (${MediaBreakpoints.tablet}) {
        margin: 0 ${Measurements.gutter} 0 ${Measurements.gutter};
    }
`;
