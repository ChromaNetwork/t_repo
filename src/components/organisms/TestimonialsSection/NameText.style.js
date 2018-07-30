// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    && {
        color: ${prop(ThemeProps.white)};
        margin-top: 24px;
        font-weight: bold;
        text-align: center;
    }
`;