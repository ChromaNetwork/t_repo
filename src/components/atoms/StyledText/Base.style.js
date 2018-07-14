// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { Colors } from "Base/Constants";

export default css`
    margin: 0;
    padding: 0;
    color: ${props => (props.color ? props.color : Colors.black)};
    background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
`;
