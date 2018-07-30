// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    && {
        flex-direction: row;
        padding-bottom: 48px;
        background-color: ${prop(ThemeProps.secondaryColor)};
    }
`;
