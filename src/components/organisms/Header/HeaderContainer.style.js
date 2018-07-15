// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Measurements, Depths } from "Base/Constants";

export default css`
    background-color: ${props => (props.heroFloat ? "transparent" : props.theme.black)};
    height: ${props => (props.heroFloat ? Measurements.headerHeight : Measurements.nonHeroHeaderHeight)};
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    margin-top: ${props => (props.heroFloat ? Measurements.basePadding : 0)};
    margin-bottom: ${props => (props.heroFloat ? Measurements.basePadding : 0)};
    box-sizing: border-box;
    display: flex;
    position: ${props => (props.heroFloat ? "absolute" : "inherit")};
    width: 100%;
    z-index: ${Depths.highest};
`;
