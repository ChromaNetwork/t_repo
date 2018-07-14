// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { FontSizes } from "Base/Constants";

export default css`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    font-size: ${FontSizes.normalHeading};
`;
