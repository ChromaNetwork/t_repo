// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

export default css`
    background-color: ${prop(ThemeProps.secondaryColor)};
    width: 33%;
    height: 5px;
    border: none;
    margin-top: 15px;
    margin-bottom: 15px;
`;
