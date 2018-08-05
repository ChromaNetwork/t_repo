// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Assets
import BlueArrowTip from "Assets/svg/blue_arrow_tip.svg";
import BlueArrowBody from "Assets/svg/blue_bg.svg";

// Styles
import SectionStyle from "./style";

const Container = styled.div`
    ${SectionStyle};
`;

const StyledArrowTip = styled.img.attrs({ src: BlueArrowTip })`
    height: 76px;
    margin-left: -1px;
`;

const StyledArrowBody = styled.img.attrs({ src: BlueArrowBody })`
    height: 76px;
    width: 100%;
`;

export default function Section(props: {}) {
    return (
        <Container {...props}>
            <StyledArrowTip />
            <StyledArrowBody />
        </Container>
    );
}
