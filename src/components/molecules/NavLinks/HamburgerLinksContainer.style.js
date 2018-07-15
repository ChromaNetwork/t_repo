// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { MediaBreakpoints, Measurements, Depths } from "Base/Constants";

export default css`
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.black};
    z-index: ${Depths.highest};
    display: flex;
    flex-direction: column;
    margin-left: ${Measurements.basePadding};
    margin-right: ${Measurements.basePadding};
    padding: ${Measurements.basePadding};

    @media (${MediaBreakpoints.desktop}) {
        display: none;
    }
`;
