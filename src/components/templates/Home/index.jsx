// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants and Utils
import { Measurements, PlaceholderText } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Assets
import HeroImg from "Assets/herobg.jpg";

// Components
import HeroImage from "Molecules/HeroImage";
import Section from "Molecules/Section";
import Header from "Organisms/Header";
import TextBlock from "Organisms/TextBlock";
import ColorsDemo from "Molecules/dev/Colors";
import TypographyDemo from "Molecules/dev/Typography";

const HeaderContainer = styled.div`
    padding-bottom: ${Measurements.basePadding};
`;
function Home() {
    return (
        <div>
            <HeaderContainer>
                <Header heroFloat />
                <HeroImage srcDefault={HeroImg}>
                    <TextBlock
                        header="Tao Network Hero Image"
                        headerSize="large"
                        text={PlaceholderText}
                        textSize="large"
                        headerColor={MainTheme.white}
                        textColor={MainTheme.white}
                    />
                </HeroImage>
            </HeaderContainer>
            <Section>
                <TypographyDemo />
                <ColorsDemo />
            </Section>
        </div>
    );
}

export default Home;
