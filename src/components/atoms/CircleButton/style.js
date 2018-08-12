// @flow

// node_modules
import { css } from "styled-components";
import { ifProp, prop, switchProp } from "styled-tools";

// Constants
import { MediaBreakpoints } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

const sizes = {
    small: "24px",
    normal: "32px",
    large: "48px",
    large_t: "64px",
    normal_t: "48px",
    small_t: "32px"
};

export default css`
    text-align: center;
    background-color: ${ifProp("blue", prop(ThemeProps.tertiaryColor), prop(ThemeProps.white))};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 50%;

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

    @media (${MediaBreakpoints.tablet}) {
        ${switchProp(prop("size", "normal"), {
            small: css`
                height: ${sizes.small_t};
                width: ${sizes.small_t};
                min-height: ${sizes.small_t};
                min-width: ${sizes.small_t};
            `,
            normal: css`
                height: ${sizes.normal_t};
                width: ${sizes.normal_t};
                min-height: ${sizes.normal_t};
                min-width: ${sizes.normal_t};
            `,
            large: css`
                height: ${sizes.large_t};
                width: ${sizes.large_t};
                min-height: ${sizes.large_t};
                min-width: ${sizes.large_t};
            `
        })};
    }

    /* &:hover {
        transition: background-color 150ms linear;
        background-color: ${prop(ThemeProps.accentLightColor)};
    }

    &:active {
        transition: background-color 0ms linear;
        background-color: ${prop(ThemeProps.tertiaryColor)};
    } */
`;
