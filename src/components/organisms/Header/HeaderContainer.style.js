// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements, Depths } from "Base/Constants";

export default css`
    background-color: ${props => (props.heroFloat ? "transparent" : props.theme.black)};
    height: ${Measurements.headerHeight};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};
    display: flex;
    position: ${props => (props.heroFloat ? "absolute" : "relative")};
    width: 100%;
    z-index: ${Depths.highest};
`;
