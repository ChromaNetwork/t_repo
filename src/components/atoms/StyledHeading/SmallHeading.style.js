// @flow

// node_modules
import { css } from "styled-components";

// Constants
import { FontSizes, MediaBreakpoints } from "Base/Constants";

// Styles
import BaseHeadingStyle from "./BaseHeading.style";

export default css`
    ${BaseHeadingStyle};
    font-size: ${FontSizes.smallHeading};

    @media (${MediaBreakpoints.tablet}) {
        font-size: ${FontSizes.t_smallHeading};
    }
`;
