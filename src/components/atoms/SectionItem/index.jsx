// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Styles
import SectionStyle from "./style";

const StyledSection = styled.div`
    ${SectionStyle};
`;

type Props = {
    // bgSrcMobile?: string,
    // bgSrcTablet?: string,
    // bgSrcDesktop?: string,
    // bgSrcWide?: string,
    bgSrcDefault?: string,
    children?: Node
};

export default function Section(props: Props) {
    const { children, ...passthrough } = props;
    return <StyledSection {...passthrough}>{children}</StyledSection>;
}

Section.defaultProps = {
    bgSrcDefault: "",
    children: null
};
