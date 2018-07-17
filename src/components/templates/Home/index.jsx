// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { Measurements, PlaceholderText } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Assets
import HeroImg from "Assets/herobg.jpg";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";

const HeaderContainer = styled.div`
    padding-bottom: ${Measurements.basePadding};
`;
function Home() {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default Home;
