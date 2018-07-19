// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { PlaceholderText, Measurements } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Assets
import HeroImg from "Assets/herobg.jpg";
import IconWhite from "Assets/iconwhite.png";
import Panorama from "Assets/panorama.jpg";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import CircleButton from "Atoms/CircleButton";
import Button from "Atoms/Button";
import { LargeHeading } from "Atoms/Heading";

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
            <HeroImage fullscreen srcDefault={HeroImg}>
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
            <Section>
                <SectionItem>
                    <CenteredLargeTitle>Icon Tests</CenteredLargeTitle>
                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            size="small"
                            iconName="Twitter"
                        />
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            iconName="Twitter"
                        />
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            size="large"
                            iconName="Twitter"
                        />
                    </div>

                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            size="small"
                            iconName="Github"
                        />
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            iconName="Github"
                        />
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            size="large"
                            iconName="Github"
                        />
                    </div>

                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            size="small"
                            iconName="Slack"
                        />
                        <CircleButton
                            onClick={() => {
                                console.log("click");
                            }}
                            iconName="Slack"
                        />
                        <CircleButton
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
                    <img style={{ width: "80%", alignSelf: "center" }} src={IconWhite} alt="" />
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
                        onClick={() => {
                            console.log("clicked btn");
                        }}
                        text="Read More"
                        iconName="ArrowRight"
                        style={{ marginTop: "24px", alignSelf: "flex-end" }}
                    />
                </SectionItem>
            </Section>
            <Section>
                <SectionItem>
                    <CenteredLargeTitle>Our Partners</CenteredLargeTitle>
                    <TextBlock text={PlaceholderText} textSize="normal" />
                </SectionItem>
            </Section>
        </Fragment>
    );
}

export default Home;
