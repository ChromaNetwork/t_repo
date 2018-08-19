// @flow
// Adapted from values found at https://gist.github.com/gefangenimnetz/3ef3e18364edf105c5af#file-materialdesignshadowhelper-less and https://codepen.io/sdthornton/pen/wBZdXq

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { MediaBreakpoints } from "Base/Constants";

export default css`
    && {
        width: ${prop("width")};
        height: 200px;
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 4px;

        @media (${MediaBreakpoints.tablet}) {
            width: ${prop("widtht")};
            height: 250px;
            padding: 8px;
        }

        @media (${MediaBreakpoints.desktop}) {
            width: ${prop("widthd")};
            height: 300px;
            padding: 12px;
        }
    }
`;
