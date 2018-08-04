// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants and Utils
import { PartnerLinks } from "Base/Constants";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import PartnerCard from "Molecules/PartnerCard";
import ArrowHeading from "Molecules/ArrowHeading";

// Styles
import PartnerSectionContainerStyle from "./PartnerSectionContainer.style";
import PartnerSectionItemStyle from "./PartnerSectionItem.style";
import PartnerCardsContainerStyle from "./PartnerCardsContainer.style";

const StyledSection = styled(Section)`
    ${PartnerSectionContainerStyle};
`;
const StyledSectionItem = styled(SectionItem)`
    ${PartnerSectionItemStyle};
`;

const PartnerCardsContainer = styled.div`
    ${PartnerCardsContainerStyle};
`;

function Home() {
    return (
        <Fragment>
            <ArrowHeading text="Our Partners" align="right" />
            <StyledSection>
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
