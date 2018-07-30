// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { Measurements, PartnerLinks } from "Base/Constants";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import PartnerCard from "Molecules/PartnerCard";
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
`;
const StyledSectionItem = styled(SectionItem)`
    ${PartnerSectionItemStyle};
`;

const PartnerCardsContainer = styled.div`
    flex-direction: row;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

function Home() {
    return (
        <Fragment>
            <StyledSection>
                <SectionItem>
                    <CenteredLargeTitle>Our Partners</CenteredLargeTitle>
                </SectionItem>
                <PartnerCardsContainer>
                    {PartnerLinks.map(partnerLink => (
                        <StyledSectionItem key={partnerLink.label}>
                            <PartnerCard partnerLink={partnerLink} />
                        </StyledSectionItem>
                    ))}
                </PartnerCardsContainer>
            </StyledSection>
        </Fragment>
    );
}

export default Home;
