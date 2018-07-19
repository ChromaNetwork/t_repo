// @flow
// Adapted from values found at https://gist.github.com/gefangenimnetz/3ef3e18364edf105c5af#file-materialdesignshadowhelper-less and https://codepen.io/sdthornton/pen/wBZdXq

// node_modules
import { css } from "styled-components";
import { prop, switchProp, ifProp } from "styled-tools";

// Constants
import { Measurements } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

const hoverStyle = css`
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

export default css`
    background-color: ${prop(ThemeProps.white)};
    cursor: ${ifProp({ hover: true }, "pointer", "initial")};
    padding: ${Measurements.gutter};

    ${switchProp(prop("level", "1"), {
        "1": css`
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        `,
        "2": css`
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        `,
        "3": css`
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        `,
        "4": css`
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        `,
        "5": css`
            box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        `
    })};

    ${ifProp("hover", hoverStyle, "")};
`;
