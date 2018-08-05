// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        flex-direction: row;
        padding-bottom: 48px;

        @media (${MediaBreakpoints.tablet}) {
            padding-top: 0;
        }
    }
`;
