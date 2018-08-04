// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        margin-bottom: 0;
        margin-top: 0;
        display: block;
        margin-right: 12px;

        @media (${MediaBreakpoints.tablet}) {
            margin-right: 0;
        }
    }
`;
