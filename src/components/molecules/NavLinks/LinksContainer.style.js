// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    display: none;
    @media (${MediaBreakpoints.desktop}) {
        display: flex;
        width: 100%;
    }
`;
