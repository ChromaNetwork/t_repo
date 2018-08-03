// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    margin: 0;
    padding: 0;
    color: ${prop(ThemeProps.white)};
    text-rendering: optimizeLegibility;
    line-height: 125%;
    font-weight: 200;
    text-align: ${prop("align")};
`;
