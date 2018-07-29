// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { Measurements } from "Base/Constants";

// Styles
import NormalTextStyle from "Atoms/Text/NormalText.style";

export default css`
    ${NormalTextStyle};
    color: ${prop(ThemeProps.black)};
    text-decoration: none;
    user-select: none;
    border-bottom: none;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};

    &:visited {
        color: ${prop(ThemeProps.black)};
    }
    &:hover {
        border-bottom: 5px solid ${prop(ThemeProps.accentLightColor)};
    }
    &:active {
        color: ${prop(ThemeProps.black)};
    }
`;
