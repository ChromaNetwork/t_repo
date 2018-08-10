// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        @media (${MediaBreakpoints.tablet}) {
            width: 85%;
        }

        @media (${MediaBreakpoints.desktop}) {
            width: 70%;
        }
    }
`;
