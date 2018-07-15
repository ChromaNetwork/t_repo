// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements } from "Base/Constants";

export default css`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: ${Measurements.basePadding};
`;
