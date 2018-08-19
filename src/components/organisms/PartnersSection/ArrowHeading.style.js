// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        padding-top: 24px;
        align-items: center;
        justify-content: center;

        /* @media (${MediaBreakpoints.tablet}) {
            padding-bottom: 48px;
        } */
    }
`;
