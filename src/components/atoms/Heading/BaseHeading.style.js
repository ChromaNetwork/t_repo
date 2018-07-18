// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

export default css`
    margin: 0;
    padding: 0;
    color: ${prop("color")};
    background-color: ${prop("bgColor")};
    text-rendering: optimizeLegibility;
    line-height: 125%;
`;
