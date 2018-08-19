// @flow

// node_modules
import React, { Fragment } from "react";

// Constants and Utils
import { Paths, ImageAssets } from "Base/Constants";
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
            <Header />
            <HeroImage {...ImageAssets.heroBg2} scrollDown divideType="blue" fullscreen>
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
                        href={Paths.downloads}
                        text="Get the Wallet"
                        style={{ marginTop: "56px", alignSelf: "center", fontWeight: 300 }}
                    />
                </SectionItem>
            </HeroImage>

            <Section title="What is Tao?">
                <SectionItem>
                    <TextBlock
                        text="The Tao Network (XTO) is an open-source cryptocurrency and blockchain platform tailored to the music industry. 
                            The underlying platform allows artists to create, manage, and distribute their own unique tokens to a variety of audiences.
                             XTO tokens can also be used and traded in a variety of situations, including offline transactions."
                        textSize="large"
                        headerColor={MainTheme.white}
                        textColor={MainTheme.white}
                    />
                    <TextBlock
                        style={{ marginTop: "24px" }}
                        text="
                             Tao is fundamentally a community-based effort, and is designed to allow music enthusiasts to interact, 
                             transact, communicate, and grow together. And thanks to its unique relationship with AltMarket, 
                             Tao is also home to the next generation of artist development via a new crowdfunding process known 
                             as the Initial Artist Offering."
                        textSize="large"
                        headerColor={MainTheme.white}
                        textColor={MainTheme.white}
                    />
                    <TextBlock
                        style={{ marginTop: "24px" }}
                        text="Join us today and be a part of the future of music and entertainment."
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
