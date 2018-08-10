// @flow
// Adapted from values found at https://gist.github.com/gefangenimnetz/3ef3e18364edf105c5af#file-materialdesignshadowhelper-less and https://codepen.io/sdthornton/pen/wBZdXq

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        width: 175px;
        height: 175px;
        margin-bottom: 56px;
        align-self: center;

        @media (${MediaBreakpoints.tablet}) {
            width: 250px;
            height: 250px;
        }

        @media (${MediaBreakpoints.desktop}) {
            width: 325px;
            height: 325px;
        }
    }
`;
