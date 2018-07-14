// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements } from "Base/Constants";

// Styles
import NormalTextStyle from "Atoms/StyledText/NormalText.style";

export default css`
    transition: 0.15s;
    ${NormalTextStyle};
    align-self: center;
    color: ${props => props.theme.white};
    text-decoration: none;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};
    user-select: none;
    padding-bottom: 5px;

    &:visited {
        color: ${props => props.theme.white};
    }
    &:hover {
        transition: 0.15s;
        color: ${props => props.theme.accentLightColor};
    }
    &:active {
        transition: 0.15s;
        color: ${props => props.theme.white};
    }
`;
