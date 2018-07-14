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
import HeroImage from "Atoms/HeroImage";
import Header from "Organisms/Header";
import ColorsDemo from "Molecules/dev/Colors";

const HeaderContainer = styled.div`
    padding-bottom: ${Measurements.basePadding};
`;

function Home() {
    return (
        <div>
            <HeaderContainer>
                <Header heroFloat />
                <HeroImage srcDefault={HeroImg} alt="" />
            </HeaderContainer>
            <LargeHeading> Typography </LargeHeading>
            <hr />

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
            <hr />
            <ColorsDemo />
        </div>
    );
}

export default Home;
