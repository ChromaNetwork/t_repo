// @flow

// node_modules
import React, { Fragment } from "react";
import * as FontAwesome from "react-icons/fa";

// Constants and Utils
import { PlaceholderText, Measurements, ImageAssets } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import HeroImage from "Organisms/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Molecules/Section";
import SectionItem from "Atoms/SectionItem";
import Button from "Atoms/Button";
// import CircleButton from "Atoms/CircleButton";
import { LargeHeading, SmallHeading } from "Atoms/Heading";
import { NormalText } from "Atoms/Text";
import Footer from "Organisms/Footer";

function Downloads() {
    return (
        <Fragment>
            <Header />
            <HeroImage {...ImageAssets.panorama}>
                <TextBlock
                    header="Downloads"
                    headerSize="large"
                    text={PlaceholderText}
                    textSize="large"
                    headerColor={MainTheme.white}
                    textColor={MainTheme.white}
                    align="center"
                />
            </HeroImage>

            <Section>
                <SectionItem>
                    <LargeHeading
                        style={{ alignSelf: "center", textAlign: "center", paddingBottom: Measurements.basePadding }}
                    >
                        Read the Whitepaper
                    </LargeHeading>
                    <TextBlock text={PlaceholderText} />

                    <Button
                        onClick={() => {
                            console.log("clicked btn");
                        }}
                        text="Download Whitepaper"
                        style={{ marginTop: "24px", alignSelf: "center" }}
                    />
                </SectionItem>
            </Section>

            <Section background style={{ flexDirection: "column" }}>
                <LargeHeading color={MainTheme.white} style={{ alignSelf: "center" }}>
                    Wallet Software
                </LargeHeading>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <SectionItem>
                        <SmallHeading style={{ marginBottom: "12px" }} align="center">
                            Windows
                        </SmallHeading>
                        <FontAwesome.FaWindows style={{ alignSelf: "center" }} color="white" size={150} />
                        <Button style={{ alignSelf: "center", marginTop: "12px" }} text="Download Wallet 0.10" />
                        <NormalText style={{ marginTop: "48px", textAlign: "center" }}>Older Versions</NormalText>
                        <a href="/downloads" style={{ textDecoration: "none", alignSelf: "center", marginTop: "12px" }}>
                            <NormalText
                                style={{
                                    padding: "5px",
                                    borderRadius: "2px",
                                    backgroundColor: "white",
                                    color: "#23599F"
                                }}
                            >
                                0.9.2.3
                            </NormalText>
                        </a>
                    </SectionItem>

                    <SectionItem>
                        <SmallHeading style={{ marginBottom: "12px" }} align="center">
                            MacOS
                        </SmallHeading>
                        <FontAwesome.FaApple style={{ alignSelf: "center" }} color="white" size={150} />
                        <Button style={{ alignSelf: "center", marginTop: "12px" }} text="Download Wallet 0.10" />
                        <NormalText style={{ marginTop: "48px", textAlign: "center" }}>Older Versions</NormalText>
                        <a href="/downloads" style={{ textDecoration: "none", alignSelf: "center", marginTop: "12px" }}>
                            <NormalText
                                style={{
                                    padding: "5px",
                                    borderRadius: "2px",
                                    backgroundColor: "white",
                                    color: "#23599F"
                                }}
                            >
                                0.9.2.3
                            </NormalText>
                        </a>
                    </SectionItem>
                    <SectionItem>
                        <SmallHeading style={{ marginBottom: "12px" }} align="center">
                            Linux
                        </SmallHeading>
                        <FontAwesome.FaLinux style={{ alignSelf: "center" }} color="white" size={150} />
                        <Button style={{ alignSelf: "center", marginTop: "12px" }} text="Download Wallet 0.10" />
                        <NormalText style={{ marginTop: "48px", textAlign: "center" }}>Older Versions</NormalText>
                        <a href="/downloads" style={{ textDecoration: "none", alignSelf: "center", marginTop: "12px" }}>
                            <NormalText
                                style={{
                                    padding: "5px",
                                    borderRadius: "2px",
                                    backgroundColor: "white",
                                    color: "#23599F"
                                }}
                            >
                                0.9.2.3
                            </NormalText>
                        </a>
                    </SectionItem>
                </div>
            </Section>
            <Footer />
        </Fragment>
    );
}

export default Downloads;
