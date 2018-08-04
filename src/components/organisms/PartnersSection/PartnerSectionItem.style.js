// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        align-items: center;
        margin: 5px;
        flex: unset;

        @media (${MediaBreakpoints.tablet}) {
            margin: 10px;
        }
    }
`;
