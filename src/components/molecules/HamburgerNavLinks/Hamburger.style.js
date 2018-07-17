// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    cursor: pointer;
    margin-top: auto;
    margin-bottom: auto;

    @media (${MediaBreakpoints.desktop}) {
        display: none;
    }
`;
