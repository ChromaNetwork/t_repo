// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    && {
        /*background-color: ${prop(ThemeProps.tertiaryColor)}*/
        flex-direction: column;
    }
`;
