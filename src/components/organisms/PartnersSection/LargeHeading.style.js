// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    && {
        text-align: right;
        margin-bottom: 0px;
        color: ${prop(ThemeProps.white)};
    }
`;
