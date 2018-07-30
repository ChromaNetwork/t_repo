// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { ArrowDownCircle } from "react-feather";

// SVG
import BottomLeftBlue from "Assets/svg/BottomLeftB.svg";
import BottomRightBlue from "Assets/svg/BottomRightB.svg";

import TopLeftBlue from "Assets/svg/TopLeftB.svg";
import TopRightBlue from "Assets/svg/TopRightB.svg";

import BottomLeftPurple from "Assets/svg/BottomLeftP.svg";
import BottomRightPurple from "Assets/svg/BottomRightP.svg";

import TopLeftPurple from "Assets/svg/TopLeftP.svg";
import TopRightPurple from "Assets/svg/TopRightP.svg";

// Styles
import SectionStyle from "./SectionDivideContainer.style";
import ScrollBtnStyle from "./ScrollBtn.style";

const StyledSectionDivide = styled.div`
    ${SectionStyle};
`;

type Props = {
    direction: "top" | "bottom",
    type: "blue" | "purple",
    transparent?: boolean,
    scrollDown?: boolean,
    className?: string
};

const ScrollDownBtn = styled(ArrowDownCircle)`
    ${ScrollBtnStyle};
`;

export default function SectionDivide(props: Props) {
    const { direction, type, scrollDown, ...passthrough } = props;
    let LeftSvg = null;
    let RightSvg = null;
    switch (direction) {
        case "top":
            switch (type) {
                case "blue":
                    LeftSvg = TopLeftBlue;
                    RightSvg = TopRightBlue;
                    break;
                case "purple":
                    LeftSvg = TopLeftPurple;
                    RightSvg = TopRightPurple;
                    break;
                default:
                    break;
            }
            break;
        case "bottom":
            switch (type) {
                case "blue":
                    LeftSvg = BottomLeftBlue;
                    RightSvg = BottomRightBlue;
                    break;
                case "purple":
                    LeftSvg = BottomLeftPurple;
                    RightSvg = BottomRightPurple;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    return (
        <StyledSectionDivide {...passthrough}>
            <img src={LeftSvg} alt="" />
            {scrollDown && <ScrollDownBtn color="white" size="56" />}
            <img src={RightSvg} alt="" />
        </StyledSectionDivide>
    );
}

SectionDivide.defaultProps = {
    transparent: false,
    scrollDown: false,
    className: ""
};
