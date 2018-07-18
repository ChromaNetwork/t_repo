// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";
import CenteredSectionStyle from "./CenteredSection.style";
import CenteredSectionItemStyle from "./CenteredSectionItem.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
`;

const CenteredSection = styled(Section)`
    ${CenteredSectionStyle};
`;

const CenteredSectionItem = styled(SectionItem)`
    ${CenteredSectionItemStyle};
`;

type Props = {
    // srcMobile?: string,
    // srcTablet?: string,
    // srcDesktop?: string,
    // srcWide?: string,
    srcDefault: string,
    children?: Node
};

export default function HeroImage(props: Props) {
    const { srcDefault, children, ...passthrough } = props;
    return (
        <HeroContainer srcDefault={srcDefault} {...passthrough}>
            <CenteredSection>
                <CenteredSectionItem>{children}</CenteredSectionItem>
            </CenteredSection>
        </HeroContainer>
    );
}

HeroImage.defaultProps = {
    // srcMobile: "",
    // srcTablet: "",
    // srcDesktop: "",
    // srcWide: "",
    children: null
};
