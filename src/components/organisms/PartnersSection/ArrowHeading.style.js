// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        padding-bottom: 48px;
        padding-top: 24px;

        /* @media (${MediaBreakpoints.tablet}) {
            padding-bottom: 48px;
        } */
    }
`;
