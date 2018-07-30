// @flow

// node_modules
import React, { Fragment } from "react";

// Constants and Utils
import { PlaceholderText, ImageAssets } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import Button from "Atoms/Button";
import Footer from "Organisms/Footer";
import PartnersSection from "Organisms/PartnersSection";
import TestimonialsSection from "Organisms/TestimonialsSection";

function Home() {
    return (
        <Fragment>
            <Header heroFloat />
            <HeroImage fullscreen {...ImageAssets.heroBg}>
                <TextBlock
                    header="Here's to the Artists."
                    headerSize="large"
                    text={PlaceholderText}
                    textSize="large"
                    headerColor={MainTheme.white}
                    textColor={MainTheme.white}
                />
                <Button
                    name="Read More Button"
                    onClick={() => {
                        console.log("clicked btn");
                    }}
                    text="Read More"
                    style={{ marginTop: "24px", alignSelf: "center" }}
                />
            </HeroImage>
            <Section bgColor={MainTheme.accentLightColor}>
                <SectionItem>
                    <TextBlock
                        header="What is Tao?"
                        headerSize="large"
                        text={PlaceholderText}
                        textSize="large"
                        headerColor={MainTheme.white}
                        textColor={MainTheme.white}
                    />
                    <Button
                        name="Read More Button"
                        onClick={() => {
                            console.log("clicked btn");
                        }}
                        text="Read More"
                        iconName="ArrowRight"
                        style={{ marginTop: "24px", alignSelf: "flex-end" }}
                    />
                </SectionItem>
            </Section>

            <PartnersSection />
            <TestimonialsSection />

            <Footer />
        </Fragment>
    );
}

export default Home;
