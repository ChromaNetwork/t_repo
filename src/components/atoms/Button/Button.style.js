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
    transition: background-color 150ms linear, box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        background-color: ${prop(ThemeProps.accentLightColor)};
    }

    &:active {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: box-shadow 0s linear;
    }

    @media (${MediaBreakpoints.tablet}) {
        width: 185px;
        padding: 10px;
    }

    @media (${MediaBreakpoints.desktop}) {
        width: 200px;
    }
`;
