// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
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
    const { srcDefault, children } = props;
    return <HeroContainer srcDefault={srcDefault}>{children}</HeroContainer>;
}

HeroImage.defaultProps = {
    // srcMobile: "",
    // srcTablet: "",
    // srcDesktop: "",
    // srcWide: "",
    children: null
};
