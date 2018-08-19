// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import { LargeHeading } from "Atoms/Heading";
import PinkArrow from "Atoms/PinkArrow";
import BlueArrow from "Atoms/BlueArrow";

// Style
import HeadingContainerStyle from "./container.style";
import HeadingStyle from "./heading.style";

const HeadingContainer = styled.div`
    ${HeadingContainerStyle};
`;

const StyledHeading = styled(LargeHeading)`
    ${HeadingStyle};
`;

type Props = {
    text: string,
    align: "left" | "right" | "center"
};

export default function Section(props: Props) {
    const { text, align, ...passthrough } = props;
    return (
        <HeadingContainer align={align} {...passthrough}>
            {align === "right" && <BlueArrow />}
            <StyledHeading align={align}>{text}</StyledHeading>
            {align === "left" && <PinkArrow />}
        </HeadingContainer>
    );
}
