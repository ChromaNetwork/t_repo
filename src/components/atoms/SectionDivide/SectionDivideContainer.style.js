// @flow

// node_modules
import { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { MediaBreakpoints } from "Base/Constants";

export default css`
    width: 100%
    background-color: ${ifProp("transparent", "transparent", prop(ThemeProps.white))};
    justify-content: center;
    user-select: none;
    display: flex;

    @media (${MediaBreakpoints.tablet}) {
        justify-content: space-between;
    }
`;
