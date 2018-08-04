// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Assets
import PinkArrowTip from "Assets/svg/pink_arrow_tip.svg";
import PinkArrowBody from "Assets/svg/pink_bg.svg";

// Styles
import SectionStyle from "./style";

const Container = styled.div`
    ${SectionStyle};
`;

const StyledArrowTip = styled.img.attrs({ src: PinkArrowTip })`
    height: 76px;
`;

const StyledArrowBody = styled.img.attrs({ src: PinkArrowBody })`
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
