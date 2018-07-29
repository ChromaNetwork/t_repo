// @flow

// node_modules
import { css } from "styled-components";
import { prop, switchProp } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

const sizes = {
    large: "64px",
    normal: "48px",
    small: "32px"
};

export default css`
    text-align: center;
    color: ${prop(ThemeProps.white)};
    background-color: ${prop(ThemeProps.accentLightColor)};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    outline: none;

    ${switchProp(prop("size", "normal"), {
        small: css`
            height: ${sizes.small};
            width: ${sizes.small};
            min-height: ${sizes.small};
            min-width: ${sizes.small};
        `,
        normal: css`
            height: ${sizes.normal};
            width: ${sizes.normal};
            min-height: ${sizes.normal};
            min-width: ${sizes.normal};
        `,
        large: css`
            height: ${sizes.large};
            width: ${sizes.large};
            min-height: ${sizes.large};
            min-width: ${sizes.large};
        `
    })};
    border-radius: 50%;

    &:hover {
        transition: background-color 150ms linear;
        background-color: ${prop(ThemeProps.accentDarkColor)};
    }

    &:active {
        background-color: ${prop(ThemeProps.black)};
    }
`;
