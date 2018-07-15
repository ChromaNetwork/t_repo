// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants and Utils
import { Measurements } from "Base/Constants";

// Components
import { LargeText, NormalText, SmallText } from "Atoms/StyledText";
import { LargeHeading, NormalHeading, SmallHeading } from "Atoms/StyledHeading";

const Container = styled.div`
    padding-bottom: ${Measurements.basePadding};
`;

function Home() {
    return (
        <Container>
            <LargeHeading>Large Heading</LargeHeading>
            <NormalHeading>Normal Heading</NormalHeading>
            <SmallHeading>Small Heading</SmallHeading>
            <LargeText>Large Text</LargeText>
            <NormalText>Normal Text</NormalText>
            <SmallText>Small Text</SmallText>
        </Container>
    );
}

export default Home;
