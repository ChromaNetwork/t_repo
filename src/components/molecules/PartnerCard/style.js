// @flow
// Adapted from values found at https://gist.github.com/gefangenimnetz/3ef3e18364edf105c5af#file-materialdesignshadowhelper-less and https://codepen.io/sdthornton/pen/wBZdXq

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        width: 75px;
        height: 75px;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 8px;

        @media (${MediaBreakpoints.tablet}) {
            width: 100px;
            height: 100px;
            padding: 18px;
        }

        @media (${MediaBreakpoints.desktop}) {
            width: 135px;
            height: 135px;
            padding: 24px;
        }
    }
`;
