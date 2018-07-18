// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

// Styles
import NavLinkDefault from "./NavLinkDefault.style";

export default css`
    ${NavLinkDefault};
    && {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 5px 0;
        text-align: center;
        border-bottom: none;
        margin-left: auto;
        margin-right: auto;

        &:hover {
            color: ${prop(ThemeProps.accentLightColor)};
            border-bottom: none;
        }
    }
`;
