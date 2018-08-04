// @flow

// node_modules
import { css } from "styled-components";

// Assets
import SectionBG from "Assets/svg/section_bg.svg";

export default css`
    && {
        background-image: url(${SectionBG});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        flex-direction: column;
    }
`;
