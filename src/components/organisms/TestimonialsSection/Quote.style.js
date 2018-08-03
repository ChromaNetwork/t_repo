// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { Measurements } from "Base/Constants";
import { ThemeProps } from "Base/MainTheme";

export default css`
    && {
        text-align: center;
        padding: 0px ${Measurements.basePadding};
        color: ${prop(ThemeProps.white)};
    }
`;
