// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants and Utils
import { Measurements } from "Base/Constants";

// Assets
import HeroImg from "Assets/herobg2.jpg";

// Components
import { LargeText, NormalText, SmallText } from "Atoms/StyledText";
import { LargeHeading, NormalHeading, SmallHeading } from "Atoms/StyledHeading";
import HeroImage from "Molecules/HeroImage";
import Section from "Molecules/Section";
import Header from "Organisms/Header";
import ColorsDemo from "Molecules/dev/Colors";

const HeaderContainer = styled.div`
    padding-bottom: ${Measurements.basePadding};
`;

const Hr = styled.hr`
    width: 100%;
`;

function Home() {
    return (
        <div>
            <HeaderContainer>
                <Header heroFloat />
                <HeroImage srcDefault={HeroImg} />
            </HeaderContainer>
            <Section>
                <LargeHeading> Typography </LargeHeading>
                <Hr />

                <LargeHeading>Large Heading</LargeHeading>
                <NormalHeading>Normal Heading</NormalHeading>
                <SmallHeading>Small Heading</SmallHeading>
                <LargeText>Large Text</LargeText>
                <NormalText>Normal Text</NormalText>
                <SmallText>Small Text</SmallText>

                <br />
                <br />
                <br />
                <LargeHeading> Colors </LargeHeading>
                <Hr />
                <ColorsDemo />
            </Section>
        </div>
    );
}

export default Home;
