// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { FontSizes, MediaBreakpoints } from "Base/Constants";

// Styles
import BaseTextStyle from "./Base.style";

export default css`
    ${BaseTextStyle}
    font-size: ${FontSizes.normalText};

    @media (${MediaBreakpoints.tablet}) {
        font-size: ${FontSizes.t_normalText};
    }
`;
