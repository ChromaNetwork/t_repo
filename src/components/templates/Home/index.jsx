// @flow

// node_modules
import React, { Fragment } from "react";

// Constants and Utils
import { PlaceholderText } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Assets
import HeroImg from "Assets/herobg.jpg";
import Panorama from "Assets/panorama.jpg";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";

// DevComponents
import Colors from "Dev/Colors";

function Home() {
    return (
        <Fragment>
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
            <Section>
                <SectionItem>
                    <Colors />
                </SectionItem>
            </Section>
            <Section bgSrcDefault={Panorama}>
                <SectionItem>
                    <TextBlock
                        header="Full-Art Section"
                        headerSize="normal"
                        text={`${PlaceholderText}${PlaceholderText}`}
                        textSize="normal"
                        textColor={MainTheme.white}
                        headerColor={MainTheme.white}
                    />
                </SectionItem>
                <SectionItem>
                    <TextBlock
                        header="Full-Art Section"
                        headerSize="normal"
                        text={PlaceholderText}
                        textSize="normal"
                        textColor={MainTheme.white}
                        headerColor={MainTheme.white}
                    />
                </SectionItem>
            </Section>
        </Fragment>
    );
}

export default Home;
