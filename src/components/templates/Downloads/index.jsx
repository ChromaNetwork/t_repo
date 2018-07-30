// @flow

// node_modules
import React, { Fragment } from "react";

// Constants and Utils
import { PlaceholderText, Measurements, ImageAssets } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import Button from "Atoms/Button";
import { LargeHeading } from "Base/components/atoms/Heading";
import Footer from "Organisms/Footer";
import SectionDivide from "Atoms/SectionDivide";

function Downloads() {
    return (
        <Fragment>
            <Header heroFloat />
            <HeroImage {...ImageAssets.panorama}>
                <TextBlock
                    header="Downloads"
                    headerSize="large"
                    text={PlaceholderText}
                    textSize="large"
                    headerColor={MainTheme.white}
                    textColor={MainTheme.white}
                />
            </HeroImage>

            <Section>
                <SectionItem>
                    <LargeHeading style={{ alignSelf: "center", paddingBottom: Measurements.basePadding }}>
                        Read the Whitepaper
                    </LargeHeading>
                    <TextBlock text={PlaceholderText} />

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

            <SectionDivide direction="top" type="purple" />
            <Section bgColor={MainTheme.secondaryColor} style={{ paddingBottom: "0" }}>
                <SectionItem>
                    <LargeHeading color={MainTheme.white} style={{ alignSelf: "center" }}>
                        Wallet Software
                    </LargeHeading>
                </SectionItem>
            </Section>
            <Section bgColor={MainTheme.secondaryColor}>
                <SectionItem>
                    <TextBlock
                        header="Color Background Section"
                        headerSize="normal"
                        text={PlaceholderText}
                        textSize="normal"
                        textColor={MainTheme.white}
                        headerColor={MainTheme.white}
                    />
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

                <SectionItem>
                    <TextBlock
                        header="Color Background Section"
                        headerSize="normal"
                        text={PlaceholderText}
                        textSize="normal"
                        textColor={MainTheme.white}
                        headerColor={MainTheme.white}
                    />
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
                <SectionItem>
                    <TextBlock
                        header="Color Background Section"
                        headerSize="normal"
                        text={PlaceholderText}
                        textSize="normal"
                        textColor={MainTheme.white}
                        headerColor={MainTheme.white}
                    />
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
            <SectionDivide type="purple" direction="bottom" />
            <Footer />
        </Fragment>
    );
}

export default Downloads;
