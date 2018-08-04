// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    margin-right: 25px;
    display: flex;
    flex-direction: row-reverse;
    flex: 1;

    @media (${MediaBreakpoints.tablet}) {
        margin-right: 75px;
    }
`;
