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

function About() {
    return (
        <Fragment>
            <Header />
            <HeroImage {...ImageAssets.heroBg2}>
                <TextBlock
                    header="What is Tao?"
                    headerSize="large"
                    text={PlaceholderText}
                    textSize="large"
                    headerColor={MainTheme.white}
                    textColor={MainTheme.white}
                    align="center"
                />
            </HeroImage>

            <Section>
                <SectionItem style={{ justifyContent: "center", flex: "0.25" }}>
                    <img style={{ width: "80%", alignSelf: "center" }} src={ImageAssets.TaoLogoBig.srcDefault} alt="" />
                </SectionItem>
                <SectionItem style={{ justifyContent: "center", flex: "0.75" }}>
                    <TextBlock
                        header="Color Background Section"
                        headerSize="normal"
                        text={PlaceholderText}
                        textSize="normal"
                        textColor={MainTheme.white}
                        headerColor={MainTheme.white}
                    />
                    <TextBlock text={PlaceholderText} textSize="normal" textColor={MainTheme.white} />
                    <Button
                        aria-label="Read more button"
                        onClick={() => {
                            console.log("clicked btn");
                        }}
                        text="Read More"
                        iconName="ArrowRight"
                        style={{ marginTop: "24px", alignSelf: "flex-end" }}
                    />
                </SectionItem>
            </Section>
            <Footer />
        </Fragment>
    );
}

export default About;
