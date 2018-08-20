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
            <HeroImage {...ImageAssets.heroBg2}>
                <TextBlock
                    header="We are here to define the future of the music business, from dive bar to
                    rockstar."
                    headerSize="normal"
                    text=""
                    textAlign="center"
                    textSize="large"
                    align="center"
                />
            </HeroImage>

            <Section title="About Tao">
                <SectionItem>
                    <StyledTextBlock
                        text="The vision of the Tao Network was born in late 2014, with the ambitious and deceptively simple
                        goal of developing a rights management solution suitable for daily use by both professionals and
                        amateurs."
                    />

                    <StyledTextBlock
                        text="To learn more about the music industry, the original Tao team formed a partnership with the
                        Boogie Shack Music Group (BSMG) a music artist incubator and production services provider.
                        This partnership granted XTO developers unprecedented access and mentorship in the business,
                        letting them see for themselves the day-to-day operation of the music industry. This involvement
                        also allowed the XTO team to directly participate in artist development, or “artist and repertoire”
                        —the process of curating an artist and helping him, her, or them form their own unique style into
                        a profitable brand, which then becomes the long-term residual income that truly provides for an
                        artist’s lifetime financial success."
                    />

                    <StyledTextBlock
                        text="The partnership with BSMG lead to many new friends, including hit songwriter and 
                        Hollywood legend Peter Rafelson. Mr. Rafelson was CEO of DigiRAMP, a digital rights management 
                        platform which served over 3,000 artists. It was many hours of discussions where we 
                        realized that a monetized rights management platform couldn't compete with existing 
                        non-blockchain platforms"
                    />

                    <StyledTextBlock
                        text="A comparison with other proposed and/or existing music platforms, blockchain-based or not,
                        confirms this suspicion. Most make use of a complex profit-sharing schemes that hardly
                        profitable and face significant barriers to adoption, regardless of whether they use token-based
                        economics or not. Launching this kind of platform would require achieving use at scale and then
                        competing with wildly profitable and entrenched incumbents. Worst of all, no new real value is
                        created in the music supply chain via these methods; they merely replace one middle man with
                        another. What, then, is to be done?"
                    />

                    <StyledTextBlock text="In the end, the solution turned out to be simple after all." />

                    <StyledTextBlock
                        text="Utilizing properties which are proved to already work in the markets, the Initial Artist Offering (IAO) 
                        was created. An IAO is similar to an ICO, however it revolves around a 
                        different regulatory framework: they are commodities, not securities. This is done by creating officially 
                        licensed and branded collectible tokens which bear the likeness of an artist which may be sold to the public, 
                        similar to t-shirts, posters, or commemorative coins from the Franklin Mint."
                    />

                    <StyledTextBlock
                        text="These Artist Tokens would be more than mere collectibles: they’d unleash radically new ways
                        for artists to interact with their fans, creating an individually branded and personally created
                        incentive system for supporters, with the possibilities limited only by the creativity of the artist.
                        The incentives an artist may offer to their fans becomes the à la carte menu of fan interaction,
                        from free shows, backstage passes, and face-to-face meetings, to more traditional items like t-
                        shirts and posters. And not only the quantity of tokens possessed could be considered, but also
                        the length of time one has owned a token. By incorporating the length of time a fan has owned an
                        artist’s token, entirely new value and meaning to both monetary and fan experience
                        considerations can be created."
                    />
                    <StyledTextBlock
                        text={`This is what we call “Proof of Fan,” which details the entire history of support and interaction between a fan and an artist. The funds raised just don't disappear; they are reinvested into the artist through the award-winning network of Boogie Shack Music Group. IAOs aren't just collectible tokens; they can take an artist from dive bar to rockstar! Even established artists will be able to create new music, new tours, and new experiences for their fans with perks that only "Proof of Fan" memberships can provide!`}
                    />

                    <StyledTextBlock
                        text="In August 2016, the XTO crowd sale and concluded with a raise of $100,000. Unlike most contemporary ICOs, 
                        an unfair, multi-million dollar raise was unnecessary. Tao is a 100% proof of stake network and the 
                        initial monetization was to replace the speculation of miners. XTO began trading roughly 90 days later, 
                        and since then has been kept fair and free of market manipulation."
                    />

                    <StyledTextBlock
                        text="Finally, the XTO team realized that the best way to ensure the success of IAOs and Artist Tokens
                        would be the creation of a simple and intuitive interface that could also serve as an easy-to-use,
                        fully regulatory compliant on-ramp to the cryptocurrency economy. And so, XTO’s original lead
                        developer, Bryce Weiner, set off to create AltMarket: a next-generation, institutional-level, fully-
                        regulated cryptocurrency exchange that can issue officially licensed and branded Artist Tokens."
                    />

                    <StyledTextBlock
                        text="XTO, with its exclusive partnership with AltMarket and direct relationship with artists, can
                        enable musicians and performers of all of stripes to increase their engagement with fans while
                        expanding the monetization potential of their individual brands and identities. XTO-supported
                        Artist Tokens will in turn allow artists to raise the money they need to experiment with their
                        music, fund new ventures, and expand their brands."
                    />

                    <StyledTextBlock
                        text="A comparison with other proposed and/or existing music platforms, blockchain-based or not,
                        confirms this suspicion. Most make use of a complex profit-sharing schemes that hardly
                        profitable and face significant barriers to adoption, regardless of whether they use token-based
                        economics or not. Launching this kind of platform would require achieving use at scale and then
                        competing with wildly profitable and entrenched incumbents. Worst of all, no new real value is
                        created in the music supply chain via these methods; they merely replace one middle man with
                        another. What, then, is to be done?"
                    />

                    <StyledTextBlock
                        text="So join us today in this exciting new universe of music and the interaction between artists and
                        fans!"
                    />
                </SectionItem>
            </Section>
            <Footer />
        </Fragment>
    );
}

export default About;
