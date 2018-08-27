// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { ImageAssets } from "Base/Constants";

// Components
import HeroImage from "Organisms/HeroImage";
import TextBlock from "Molecules/TextBlock";
import Header from "Organisms/Header";
import Section from "Molecules/Section";
import SectionItem from "Atoms/SectionItem";
import Footer from "Organisms/Footer";

const StyledTextBlock = styled(TextBlock)`
    padding-top: 12px;
    padding-bottom: 12px;
`;

function About() {
    return (
        <Fragment>
            <Header />
            <HeroImage {...ImageAssets.Concert3}>
                <TextBlock
                    header="About Tao"
                    headerSize="large"
                    text="We are here to define the future of the business of music, from dive bar to rockstar."
                    textAlign="center"
                    textSize="large"
                    align="center"
                />
            </HeroImage>

            <Section title="The Tao Vision">
                <SectionItem>
                    <StyledTextBlock text="The vision of the Tao Network was born in late 2014, with the ambitious and deceptively simple goal of developing a rights management solution suitable for daily use by both professionals and amateurs." />

                    <StyledTextBlock text="To learn more about the music industry, the original Tao team formed a partnership with the Boogie Shack Music Group (BSMG) a music artist incubator and production services provider. This partnership granted XTO developers unprecedented access and mentorship in the business, letting them see for themselves the day-to-day operation of the music industry. This involvement also allowed the XTO team to directly participate in artist development, or “artist and repertoire” —the process of curating an artist and helping him, her, or them form their own unique style into a profitable brand, which then becomes the long-term residual income that truly provides for an artist’s lifetime financial success." />

                    <StyledTextBlock
                        text="The partnership with BSMG helped the XTO team realize something: a right management platform without monetary incentives is simply not possible.
                        A comparison with other proposed and/or existing music platforms, blockchain-based or not, confirms this suspicion. Most make use of a complex profit-sharing schemes that hardly profitable and face significant barriers to adoption, regardless of whether they use token-based economics or not. Launching this kind of platform would require achieving use at scale and then competing with wildly profitable and entrenched incumbents. Worst of all, no new real value is created in the music supply chain via these methods; they merely replace one middle man with another. What, then, is to be done?"
                    />
                </SectionItem>
            </Section>

            <Section title="The Solution" titleAlign="right">
                <SectionItem>
                    <StyledTextBlock text="In the end, the solution turned out to be simple after all." />

                    <StyledTextBlock text="Why not combine cryptocurrencies, crowdfunding, and artists together to create officially licensed and branded products to that could be sold to the public as peer-to-peer tradeable collectible tokens? The resulting tokens, issued via 100 percent regulatory compliant Initial Artist Offerings (IAOs), would be the twenty-first century evolution of the baseball card or commemorative token of yesteryear." />

                    <StyledTextBlock text="These IAO tokens would be more than mere collectibles: they’d unleash radically new ways for artists to interact with their fans, creating an individually branded and personally created incentive system for supporters, with the possibilities limited only by the creativity of the artist. The incentives an artist may offer to their fans becomes the à la carte menu of fan interaction, from free shows, backstage passes, and face-to-face meetings, to more traditional items like t-shirts and posters. And not only the quantity of tokens possessed could be considered, but also the length of time one has owned a token. By incorporating the length of time a fan has owned an artist’s token, entirely new value and meaning to both monetary and fan experience considerations can be created. This is what we call “Proof of Fan” which details the entire history of support and interaction between a fan and an artist." />
                </SectionItem>
            </Section>

            <Section title="Tao Network Today" titleAlign="left">
                <SectionItem>
                    <StyledTextBlock text="With the problem resolved, on August 2016, the XTO team launched its crowd sale and raised a humble yet executable $100,000. Unlike most contemporary ICOs, an unfair, multi-million dollar raise was unnecessary, and XTO trading since then has been kept fair and unmanipulated." />

                    <StyledTextBlock text="Finally, the XTO team realized that the best way to ensure the success of IAOs and IAO tokens would be the creation of a simple and intuitive interface that could also serve as an easy-to-use, fully regulatory compliant on-ramp to the cryptocurrency economy. And so, XTO’s original lead developer, Bryce Weiner, set off to create AltMarket: a next-generation, institutional-level, fully-regulated cryptocurrency exchange that can issue officially licensed and branded IAO tokens." />

                    <StyledTextBlock text="XTO, with its exclusive partnership with AltMarket and direct relationship with artists, can enable musicians and performers of all of stripes to increase their engagement with fans while expanding the monetization potential of their individual brands and identities. XTO-supported IAO tokens will in turn allow artists to raise the money they need to experiment with their music, fund new ventures, and expand their brands." />
                </SectionItem>
            </Section>

            <Section>
                <SectionItem>
                    <StyledTextBlock
                        align="center"
                        header="So join us today in this exciting new universe of music and the interaction between artists and fans!"
                        headerSize="small"
                    />
                </SectionItem>
            </Section>

            <Footer />
        </Fragment>
    );
}

export default About;
