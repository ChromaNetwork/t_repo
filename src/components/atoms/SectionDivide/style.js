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
    justify-content: space-between;
    display: none;

    @media (${MediaBreakpoints.tablet}) {
        display: flex;
    }
`;
