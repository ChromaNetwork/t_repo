// @flow

// node_modules
import { css } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";

// Assets
import BottomBorder from "Assets/svg/contact_border.svg";

export default css`
    && {
        align-self: center;
        text-align: center;
        font-weight: 300;
        color: ${prop(ThemeProps.white)};
        background-image: url(${BottomBorder});
        background-repeat: no-repeat;
        background-position: 0 60%;
        padding-bottom: 24px;
        margin-bottom: 0;
    }
`;
