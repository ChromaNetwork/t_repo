// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements } from "Base/Constants";

// Styles
import NormalTextStyle from "Atoms/StyledText/NormalText.style";

export default css`
    transition: border-bottom 0.15s;
    ${NormalTextStyle};
    align-self: center;
    color: ${props => props.theme.white};
    text-decoration: none;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};
    user-select: none;
    padding-bottom: 5px;
    border-bottom: none;

    &:visited {
        color: ${props => props.theme.white};
    }
    &:hover {
        border-bottom: 5px solid ${props => props.theme.accentLightColor};
        padding-bottom: 0;
    }
    &:active {
        color: ${props => props.theme.white};
    }
`;
