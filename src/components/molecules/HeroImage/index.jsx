// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import Section from "Molecules/Section";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";
import CenteredSectionStyle from "./CenteredSection.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
`;

const CenteredSection = styled(Section)`
    ${CenteredSectionStyle};
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
            <CenteredSection>{children}</CenteredSection>
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
