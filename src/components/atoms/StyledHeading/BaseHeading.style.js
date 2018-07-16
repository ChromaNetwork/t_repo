// @flow

// node_modules
import { css } from "styled-components";

export default css`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    text-rendering: optimizeLegibility;
    line-height: 125%;
`;
