// @flow

// node_modules
import { css } from "styled-components";

// Styles
import NavLinkDefault from "./NavLinkDefault.style";

export default css`
    ${NavLinkDefault};
    && {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 5px 0;
        text-align: center;
        transition: 0.15s;
        border-bottom: none;

        &:hover {
            color: ${props => props.theme.accentLightColor};
            border-bottom: none;
        }
    }
`;
