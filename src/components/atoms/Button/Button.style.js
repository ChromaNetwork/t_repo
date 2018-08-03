// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { MediaBreakpoints } from "Base/Constants";

export default css`
    text-align: center;
    background-color: ${prop(ThemeProps.tertiaryColor)};
    border: none;
    cursor: pointer;
    outline: none;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    width: 175px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: background-color 150ms linear;

    /* &:hover {
        background-color: ${prop(ThemeProps.accentLightColor)};
    }

    &:active {
        transition: background-color 0ms linear;
        background-color: ${prop(ThemeProps.tertiaryColor)};
    } */

    @media (${MediaBreakpoints.tablet}) {
        width: 185px;
        padding: 10px;
    }

    @media (${MediaBreakpoints.desktop}) {
        width: 200px;
    }
`;
