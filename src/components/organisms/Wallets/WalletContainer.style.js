// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        min-width: 200px;
        padding-bottom: 48px;

        @media (${MediaBreakpoints.tablet}) {
            padding-bottom: 0;
        }
    }
`;
