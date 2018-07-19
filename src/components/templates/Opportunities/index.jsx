// @flow

// node_modules
import React, { Fragment } from "react";

// Constants and Utils
import { PlaceholderText } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Assets
import HeroImg from "Assets/herobg2.jpg";
import IconWhite from "Assets/iconwhite.png";

// Components
import HeroImage from "Molecules/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import Button from "Atoms/Button";
import Footer from "Organisms/Footer";

function Opportunities() {
    return (
        <Fragment>
            <Header heroFloat />
            <HeroImage srcDefault={HeroImg}>
                <TextBlock
                    header="Opportunities"
                    headerSize="large"
                    text={PlaceholderText}
                    textSize="large"
                    headerColor={MainTheme.white}
                    textColor={MainTheme.white}
                />
            </HeroImage>
            <Section bgColor={MainTheme.primaryColor}>
                <SectionItem style={{ justifyContent: "center" }}>
                    <img
                        style={{
                            width: "80%",
                            alignSelf: "center"
                        }}
                        src={IconWhite}
                        alt=""
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
                    <TextBlock header="Other Section" headerSize="normal" text={PlaceholderText} textSize="normal" />
                    <TextBlock text={PlaceholderText} textSize="normal" />
                    <Button
                        onClick={() => {
                            console.log("clicked btn");
                        }}
                        text="Read More"
                        iconName="ArrowRight"
                        style={{ marginTop: "24px", alignSelf: "flex-end" }}
                    />
                </SectionItem>
                <SectionItem style={{ justifyContent: "center" }}>
                    <img
                        style={{
                            width: "80%",
                            alignSelf: "center",
                            filter: "invert(100%)"
                        }}
                        src={IconWhite}
                        alt=""
                    />
                </SectionItem>
            </Section>
            <Footer />
        </Fragment>
    );
}

export default Opportunities;
