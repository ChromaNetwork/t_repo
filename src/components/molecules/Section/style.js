// @flow

// node_modules
import { css } from "styled-components";
import { ifProp } from "styled-tools";

// Constants
import { Measurements, MediaBreakpoints } from "Base/Constants";

// Assets
import SectionBG from "Assets/svg/section_bg.svg";

const ImageCss = css`
    background-image: url(${SectionBG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

export default css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    padding-top: ${Measurements.basePadding};
    padding-bottom: ${Measurements.basePadding};
    margin-top: ${Measurements.sectionMargin};
    margin-bottom: ${Measurements.sectionMargin};

    ${ifProp("background", ImageCss, "")};

    @media (${MediaBreakpoints.tablet}) {
        flex-direction: row;
        padding-left: ${Measurements.hPadding};
        padding-right: ${Measurements.hPadding};
        margin-top: ${Measurements.sectionMargin_t};
        margin-bottom: ${Measurements.sectionMargin_t};
    }
`;
