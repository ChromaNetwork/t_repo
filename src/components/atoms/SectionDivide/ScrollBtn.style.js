// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    cursor: pointer;
    color: ${prop(ThemeProps.white)};
`;
