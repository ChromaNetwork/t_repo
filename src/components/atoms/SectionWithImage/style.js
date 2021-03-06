// @flow

// node_modules
import { css } from "styled-components";
import { prop, ifProp } from "styled-tools";
import { transparentize } from "polished";

// Constants
import { Measurements, MediaBreakpoints } from "Base/Constants";
// import { ThemeProps } from "Base/MainTheme";

const BgImageCss = css`
    && {
        background: linear-gradient(
                ${props => transparentize(0.7, props.theme.black)},
                ${props => transparentize(0.6, props.theme.primaryColor)}
            ),
            url(${prop("bgSrcPlaceholder")});
        ${ifProp(
            "loaded",
            css`
                background-image: url(${prop("bgSrcDefault")});
            `
        )};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export default css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};

    ${BgImageCss};

    @media (${MediaBreakpoints.tablet}) {
        flex-direction: row;
        padding-left: ${Measurements.hPadding};
        padding-right: ${Measurements.hPadding};
    }
`;
