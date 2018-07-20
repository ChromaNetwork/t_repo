// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { PlaceholderText, Measurements, ImageAssets } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import SectionWithImage from "Atoms/SectionWithImage";
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import CircleButton from "Atoms/CircleButton";
import Button from "Atoms/Button";
import Card from "Atoms/Card";
import { LargeHeading } from "Atoms/Heading";
import Footer from "Organisms/Footer";
import PartnersSection from "Organisms/PartnersSection";

// DevComponents
import Colors from "Dev/Colors";

const CenteredLargeTitle = styled(LargeHeading)`
    align-self: center;
    padding-bottom: ${Measurements.basePadding};
`;

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
            </HeroImage>
            <Section>
                <SectionItem>
                    <Colors />
                </SectionItem>
            </Section>
            <SectionWithImage
                bgSrcPlaceholder={ImageAssets.panorama.srcPlaceholder}
                bgSrcDefault={ImageAssets.panorama.srcDefault}
            >
                <SectionItem>
                    <TextBlock
                        header="Full-Art Section"
                        headerSize="normal"
                        text={`${PlaceholderText} ${PlaceholderText}`}
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
            </SectionWithImage>
            <Section>
                <SectionItem>
                    <CenteredLargeTitle>Icon Tests</CenteredLargeTitle>
                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                        <CircleButton
                            aria-label="Twitter"
                            onClick={() => {
                                console.log("click");
                            }}
                            size="small"
                            iconName="Twitter"
                        />
                        <CircleButton
                            aria-label="Twitter"
                            onClick={() => {
                                console.log("click");
                            }}
                            iconName="Twitter"
                        />
                        <CircleButton
                            aria-label="Twitter"
                            onClick={() => {
                                console.log("click");
                            }}
                            size="large"
                            iconName="Twitter"
                        />
                    </div>

                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                        <CircleButton
                            aria-label="Github"
                            onClick={() => {
                                console.log("click");
                            }}
                            size="small"
                            iconName="Github"
                        />
                        <CircleButton
                            aria-label="Github"
                            onClick={() => {
                                console.log("click");
                            }}
                            iconName="Github"
                        />
                        <CircleButton
                            aria-label="Github"
                            onClick={() => {
                                console.log("click");
                            }}
                            size="large"
                            iconName="Github"
                        />
                    </div>

                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                        <CircleButton
                            aria-label="Slack"
                            onClick={() => {
                                console.log("click");
                            }}
                            size="small"
                            iconName="Slack"
                        />
                        <CircleButton
                            aria-label="Slack"
                            onClick={() => {
                                console.log("click");
                            }}
                            iconName="Slack"
                        />
                        <CircleButton
                            aria-label="Slack"
                            onClick={() => {
                                console.log("click");
                            }}
                            size="large"
                            iconName="Slack"
                        />
                    </div>
                </SectionItem>
            </Section>
            <Section bgColor={MainTheme.primaryColor}>
                <SectionItem style={{ justifyContent: "center" }}>
                    <img style={{ width: "80%", alignSelf: "center" }} src={ImageAssets.TaoLogoBig.srcDefault} alt="" />
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
                    <TextBlock text={PlaceholderText} textSize="normal" textColor={MainTheme.white} />
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
            <Section bgColor={MainTheme.secondaryColor}>
                <SectionItem>
                    <Card level={1}>
                        <TextBlock header="Card" headerSize="normal" text={PlaceholderText} textSize="normal" />
                    </Card>
                </SectionItem>
                <SectionItem>
                    <Card level={1} hover>
                        <TextBlock
                            header="Clickable Card"
                            headerSize="normal"
                            text={PlaceholderText}
                            textSize="normal"
                        />
                    </Card>
                </SectionItem>
            </Section>
            <PartnersSection />
            <Footer />
        </Fragment>
    );
}

export default Home;
