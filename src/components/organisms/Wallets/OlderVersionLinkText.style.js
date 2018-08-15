// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    && {
        padding: 5px;
        border-radius: 2px;
        background-color: ${prop(ThemeProps.white)};
        color: ${prop(ThemeProps.black)};
    }
`;
