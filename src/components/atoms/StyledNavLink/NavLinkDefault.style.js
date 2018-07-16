// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { Measurements } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

// Styles
import NormalTextStyle from "Atoms/StyledText/NormalText.style";

export default css`
    transition: border-bottom 0.15s;
    ${NormalTextStyle};
    align-self: center;
    color: ${prop(ThemeProps.white)};
    text-decoration: none;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};
    user-select: none;
    padding-bottom: 5px;
    border-bottom: none;

    &:visited {
        color: ${prop(ThemeProps.white)};
    }
    &:hover {
        border-bottom: 5px solid ${prop(ThemeProps.accentLightColor)};
        padding-bottom: 0;
    }
    &:active {
        color: ${prop(ThemeProps.white)};
    }
`;
