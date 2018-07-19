// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    background-color: ${prop(ThemeProps.secondaryColor)};
    width: 50%;
    height: 10px;
    border: none;
    margin-top: 0;
    margin-bottom: 15px;
`;
