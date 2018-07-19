// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { MediaBreakpoints } from "Base/Constants";

export default css`
    text-align: center;
    background-color: ${prop(ThemeProps.accentLightColor)};
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

    &:hover {
        transition: background-color 150ms linear;
        background-color: ${prop(ThemeProps.accentDarkColor)};
    }

    &:active {
        background-color: ${prop(ThemeProps.black)};
    }

    @media (${MediaBreakpoints.tablet}) {
        width: 185px;
        padding: 10px;
    }

    @media (${MediaBreakpoints.desktop}) {
        width: 200px;
    }
`;
