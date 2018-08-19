// @flow

// node_modules
import { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { MediaBreakpoints } from "Base/Constants";

// Assets
import BottomBorder from "Assets/svg/contact_border.svg";

export default css`
    margin-bottom: 0;
    align-self: center;

    ${ifProp(
        { align: "center" },
        css`
            && {
                align-self: center;
                text-align: center;
                color: ${prop(ThemeProps.white)};
                background-image: url(${BottomBorder});
                background-repeat: no-repeat;
                background-position: 0 45%;
                background-size: 100% 20px;
                padding-bottom: 24px;
                margin-bottom: 0;

                @media (${MediaBreakpoints.tablet}) {
                    background-position: 0 60%;
                    background-size: 100% 30px;
                }
            }
        `
    )};
`;
