// @flow

// node_modules
import React, { Fragment } from "react";

// Constants and Utils
import { PlaceholderText } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import HeroImage from "Organisms//HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Molecules/Section";
import SectionItem from "Atoms/SectionItem";
import Button from "Atoms/Button";
import Footer from "Organisms/Footer";
import PartnersSection from "Organisms/PartnersSection";
import TestimonialsSection from "Organisms/TestimonialsSection";

function Home() {
    return (
        <Fragment>
            <Header heroFloat />
            <HeroImage scrollDown divideType="blue" fullscreen srcPlaceholder="" srcDefault="">
                <SectionItem>
                    <TextBlock
                        header="Here's to the Artists."
                        align="center"
                        headerSize="large"
                        text="More fans. More music. More opportunity. Tao is bridging the gap between artists and followers."
                        textSize="large"
                        textAlign="center"
                        headerColor={MainTheme.white}
                        textColor={MainTheme.white}
                    />
                    <Button
                        name="Download Wallet Button"
                        onClick={() => {
                            console.log("clicked btn");
                        }}
                        text="Get the Wallet"
                        style={{ marginTop: "56px", alignSelf: "center", fontWeight: 300 }}
                    />
                </SectionItem>
            </HeroImage>

            <Section title="What is Tao?">
                <SectionItem>
                    <TextBlock
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
