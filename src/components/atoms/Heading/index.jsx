// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Types
import type { Node } from "react";

// Styles
import LargeHeadingStyle from "./LargeHeading.style";
import NormalHeadingStyle from "./NormalHeading.style";
import SmallHeadingStyle from "./SmallHeading.style";

type Props = {
    children: Node
};

const StyledLargeHeading = styled.h1`
    ${LargeHeadingStyle};
`;

export const LargeHeading = (props: Props) => {
    const { children, ...passthrough } = props;
    return <StyledLargeHeading {...passthrough}>{children}</StyledLargeHeading>;
};

const StyledNormalHeading = styled.h2`
    ${NormalHeadingStyle};
`;

export const NormalHeading = (props: Props) => {
    const { children, ...passthrough } = props;
    return <StyledNormalHeading {...passthrough}>{children}</StyledNormalHeading>;
};

const StyledSmallHeading = styled.h3`
    ${SmallHeadingStyle};
`;

export const SmallHeading = (props: Props) => {
    const { children, ...passthrough } = props;
    return <StyledSmallHeading {...passthrough}>{children}</StyledSmallHeading>;
};
