// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    display: flex;
    flex-direction: column;

    @media (${MediaBreakpoints.tablet}) {
        min-width: 250px;
    }
`;
