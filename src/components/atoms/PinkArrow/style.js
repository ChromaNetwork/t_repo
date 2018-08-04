// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    margin-left: 25px;
    display: flex;
    flex: 1;

    @media (${MediaBreakpoints.tablet}) {
        margin-left: 75px;
    }
`;
