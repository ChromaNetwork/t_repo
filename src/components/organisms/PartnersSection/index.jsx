// @flow

// node_modules
import React, { Fragment } from "react";
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
// import ContainerStyle from "./Container.style";

// const Container = styled.div`
//     ${ContainerStyle};
// `;

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
        <Fragment>
            <StyledArrowHeading text="Our Partners" align="right" />
            <StyledSection background>
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
