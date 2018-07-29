// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants
import { FooterLinks, Measurements } from "Base/Constants";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import CircleButton from "Atoms/CircleButton";
import { LargeHeading } from "Atoms/Heading";

const FooterContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 225px;
`;

const FooterLinksContainer = styled(SectionItem)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TitleContainer = styled(SectionItem)`
    justify-content: center;
    align-items: center;
`;

const CenteredLargeTitle = styled(LargeHeading)`
    align-self: center;
`;

const StyledCircleButton = styled(CircleButton)`
    margin: ${Measurements.gutter};
`;

export default function Footer() {
    return (
        <FooterContainer>
            <TitleContainer>
                <CenteredLargeTitle> Connect with Tao </CenteredLargeTitle>
            </TitleContainer>
            <FooterLinksContainer>
                {FooterLinks.map(footerLink => (
                    <StyledCircleButton
                        size="large"
                        key={footerLink.icon}
                        aria-label={footerLink.icon}
                        onClick={() => {
                            console.log(`click for ${footerLink.url}`);
                        }}
                        iconName={footerLink.icon}
                    />
                ))}
            </FooterLinksContainer>
        </FooterContainer>
    );
}
