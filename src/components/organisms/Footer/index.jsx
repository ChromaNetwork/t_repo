// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants
import { FooterLinks } from "Base/Constants";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import CircleButton from "Atoms/CircleButton";
import { NormalHeading } from "Atoms/Heading";

// Styles
import FooterContainerStyle from "./FooterContainer.style";
import FooterLinksContainerStyle from "./FooterLinksContainer.style";
import TitleContainerStyle from "./TitleContainer.style";
import CenteredTitleStyle from "./CenteredTitle.style";
import CircleButtonStyle from "./CircleButton.style";

const FooterContainer = styled(Section)`
    ${FooterContainerStyle};
`;

const FooterLinksContainer = styled(SectionItem)`
    ${FooterLinksContainerStyle};
`;

const TitleContainer = styled(SectionItem)`
    ${TitleContainerStyle};
`;

const CenteredTitle = styled(NormalHeading)`
    ${CenteredTitleStyle};
`;

const StyledCircleButton = styled(CircleButton)`
    ${CircleButtonStyle};
`;

export default function Footer() {
    return (
        <FooterContainer>
            <TitleContainer>
                <CenteredTitle> Contact Header </CenteredTitle>
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
