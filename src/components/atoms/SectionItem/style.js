// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements } from "Base/Constants";

export default css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: ${Measurements.gutter};
    min-width: 250px;
`;
