// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { PlaceholderText, Measurements, PartnerLinks } from "Base/Constants";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import PartnerCard from "Molecules/PartnerCard";
import TextBlock from "Molecules/TextBlock";
import { LargeHeading } from "Atoms/Heading";

// Styles
import PartnerSectionContainerStyle from "./PartnerSectionContainer.style";
import PartnerSectionItemStyle from "./PartnerSectionItem.style";

const CenteredLargeTitle = styled(LargeHeading)`
    align-self: center;
    padding-bottom: ${Measurements.basePadding};
`;

const StyledSection = styled(Section)`
    ${PartnerSectionContainerStyle};
    padding-bottom: 48px;
`;
const StyledSectionItem = styled(SectionItem)`
    ${PartnerSectionItemStyle};
`;

function Home() {
    return (
        <Fragment>
            <Section>
                <SectionItem>
                    <CenteredLargeTitle>Our Partners</CenteredLargeTitle>
                    <TextBlock text={PlaceholderText} textSize="normal" />
                </SectionItem>
            </Section>
            <StyledSection>
                {PartnerLinks.map(partnerLink => (
                    <StyledSectionItem key={partnerLink.label}>
                        <PartnerCard partnerLink={partnerLink} />
                    </StyledSectionItem>
                ))}
            </StyledSection>
        </Fragment>
    );
}

export default Home;
