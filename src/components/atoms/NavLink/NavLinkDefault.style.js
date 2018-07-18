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
    color: ${prop(ThemeProps.white)};
    text-decoration: none;
    user-select: none;
    padding-bottom: 5px;
    border-bottom: none;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};

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
