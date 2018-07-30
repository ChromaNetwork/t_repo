// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    display: none;

    @media (${MediaBreakpoints.tablet}) {
        display: inherit;
    }
`;
