// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Depths } from "Base/Constants";

export default css`
    &[style] {
        width: 100% !important;
        height: 100% !important;
    }
    z-index: ${Depths.default};
    position: absolute;
    top: 0;
    left: 0;
`;
