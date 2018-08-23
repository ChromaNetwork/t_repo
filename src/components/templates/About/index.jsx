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
                    text="We are here to define the future of the music business, from dive bar to
                    rockstar."
                    textAlign="center"
                    textSize="large"
                    align="center"
                />
            </HeroImage>

            <Section title="The Tao Vision">
                <SectionItem>
                    <StyledTextBlock text="The vision of the Tao Network was born in late 2014, with the ambitious and simple goal of developing a rights management solution suitable for daily use by both professionals and amateurs." />

                    <StyledTextBlock
                        text="To learn more about the music industry, the original Tao team formed a partnership with the Boogie Shack Music Group 
                        (BSMG), a music artist incubator and production services provider. This partnership granted XTO developers unprecedented 
                        access and mentorship in the business, giving them access to the day-to-day operation of the music industry. 
                        This involvement also allowed the XTO team to directly participate in artist development, or “artist and repertoire” 
                        —the process of curating artists and helping them form their own unique style into a profitable brand, 
                        which then becomes the long-term residual income that truly provides for an artist’s lifetime financial success."
                    />

                    <StyledTextBlock
                        text="The partnership with BSMG led to many new friends, including hit songwriter and Hollywood legend Peter Rafelson. 
                        Mr. Rafelson was CEO of DigiRAMP, a digital rights management platform which served over 3,000 artists. It was after 
                        many hours of discussions where the XTO team realized that a monetized rights management platform couldn't compete 
                        with existing non-blockchain platforms."
                    />

                    <StyledTextBlock
                        text="A comparison with other proposed and/or existing music platforms, blockchain-based or not, confirms this 
                        suspicion. Most make use of complex profit-sharing schemes that are barely profitable and face significant barriers 
                        to adoption. Launching this kind of platform would require achieving use at scale and then competing with wildly 
                        profitable and entrenched incumbents. Worst of all, no new real value is created in the music supply chain via these 
                        methods; they merely replace one middle man with another. What, then, is to be done?"
                    />
                </SectionItem>
            </Section>

            <Section title="The Solution" titleAlign="right">
                <SectionItem>
                    <StyledTextBlock text="In the end, the solution turned out to be simple after all." />

                    <StyledTextBlock
                        text="Utilizing properties which are proved to already work in the markets, the Initial Artist Offering (IAO) was created. 
                        An IAO is similar to an ICO, but it revolves around a different regulatory framework: IAOs are commodities, not securities. 
                        This is done by creating officially licensed and branded collectible tokens which bear the likeness of an artist which may 
                        be sold to the public, similar to T-shirts, posters, or commemorative coins from the Franklin Mint."
                    />

                    <StyledTextBlock
                        text="These Artist Tokens would be more than mere collectibles: they’d unleash radically new ways for artists to interact 
                        with their fans, creating individually branded and personally created incentive systems for supporters, with the 
                        possibilities limited only by the creativity of the artist. The incentives offered to fans becomes an à la carte menu 
                        of fan interaction, from free shows, backstage passes, and face-to-face meetings, to more traditional items like T-shirts 
                        and posters. And not only could the quantity of tokens possessed be considered, but also the length of time a fan owned a 
                        token. By incorporating the length of time a fan has owned an artist’s token, entirely new value and meaning to both 
                        monetary and fan experience can be created."
                    />

                    <StyledTextBlock
                        text={`This is what we call “Proof of Fan,” which details the entire history of support and interaction between a fan and an artist. The funds raised just don't disappear; they are reinvested into the artist through the award-winning network of Boogie Shack Music Group. IAOs aren't just collectible tokens; they can take an artist from dive bar to rockstar. Even established artists will be able to create new music, new tours, and new experiences for their fans with perks that only "Proof of Fan" memberships can provide!`}
                    />
                </SectionItem>
            </Section>

            <Section title="Tao Network Today" titleAlign="left">
                <SectionItem>
                    <StyledTextBlock
                        text="In August 2016, the XTO crowd sale was launched and concluded with a raise of $100,000. 
                        Unlike most contemporary ICOs, an unfair, multi-million dollar raise was unnecessary. XTO began trading
                         roughly 90 days later, and since then has been kept fair and free of market manipulation. It was and 
                         remains a 100% proof of stake network, and the initial monetization was to replace the speculation of 
                         cryptocurrency miners."
                    />

                    <StyledTextBlock
                        text="The XTO team realized that the best way to ensure the success of IAOs and Artist Tokens would be the creation 
                        of a simple and intuitive interface that could also serve as an easy-to-use, fully regulatory compliant on-ramp to 
                        the cryptocurrency economy. And so, XTO’s original lead developer, Bryce Weiner, set off to create AltMarket: 
                        a next-generation, institutional-level, fully regulated cryptocurrency exchange that can issue officially licensed 
                        and branded Artist Tokens."
                    />

                    <StyledTextBlock
                        text="XTO, with its exclusive partnership with AltMarket and direct relationship with artists, enables musicians 
                        and performers of all of stripes to increase their engagement with fans while expanding the monetization potential 
                        of their individual brands and identities. XTO-supported Artist Tokens will in turn allow artists to raise the 
                        money they need to experiment with their music, fund new ventures, and expand their brands."
                    />

                    <StyledTextBlock
                        text="A comparison with other proposed and/or existing music platforms, blockchain-based or not, confirms this suspicion. 
                        Most make use of a complex profit-sharing schemes that are barely profitable and face significant barriers to adoption, 
                        regardless of whether they use token-based economics or not. Launching this kind of platform would require achieving use 
                        at scale and then competing with wildly profitable and entrenched incumbents. Worst of all, no new real value is created 
                        in the music supply chain via these methods; they merely replace one middle man with another. This is where XTO and its 
                        team are proud to present cutting-edge technology to solve old problems and open new possibilities."
                    />
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
