// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants and Utils
import { PartnerLinks } from "Base/Constants";

// Components
import Section from "Molecules/Section";
import SectionItem from "Atoms/SectionItem";
import PartnerCard from "Molecules/PartnerCard";
import ArrowHeading from "Molecules/ArrowHeading";

// Styles
import PartnerSectionContainerStyle from "./PartnerSectionContainer.style";
import PartnerSectionItemStyle from "./PartnerSectionItem.style";
import PartnerCardsContainerStyle from "./PartnerCardsContainer.style";
import ArrowHeadingStyle from "./ArrowHeading.style";
import ContainerStyle from "./Container.style";

const Container = styled.div`
    ${ContainerStyle};
`;

const StyledSection = styled(Section)`
    ${PartnerSectionContainerStyle};
`;
const StyledSectionItem = styled(SectionItem)`
    ${PartnerSectionItemStyle};
`;

const PartnerCardsContainer = styled.div`
    ${PartnerCardsContainerStyle};
`;

const StyledArrowHeading = styled(ArrowHeading)`
    ${ArrowHeadingStyle};
`;

function Home() {
    return (
        <Container>
            <StyledArrowHeading text="Our Partners" align="center" />
            <StyledSection>
                <PartnerCardsContainer>
                    {PartnerLinks.map(partnerLink => (
                        <StyledSectionItem key={partnerLink.label}>
                            <PartnerCard partnerLink={partnerLink} />
                        </StyledSectionItem>
                    ))}
                </PartnerCardsContainer>
            </StyledSection>
        </Container>
    );
}

export default Home;
