// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { Depths } from "Base/Constants";

export default css`
    background: ${prop(ThemeProps.black)};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
    &::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Depths.default};
    }

    & iframe: {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`;
