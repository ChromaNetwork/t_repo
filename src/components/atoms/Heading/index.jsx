// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants
import { Colors } from "Base/Constants";

// Types
import type { Node } from "react";

// Styles
import LargeHeadingStyle from "./LargeHeading.style";
import NormalHeadingStyle from "./NormalHeading.style";
import SmallHeadingStyle from "./SmallHeading.style";

type Props = {
    className?: string,
    color?: string,
    bgColor?: string,
    children: Node
};

const StyledLargeHeading = styled.h1`
    ${LargeHeadingStyle};
`;

export const LargeHeading = (props: Props) => {
    const { color, bgColor, className, children, ...passthrough } = props;
    return (
        <StyledLargeHeading color={color} bgColor={bgColor} className={className} {...passthrough}>
            {children}
        </StyledLargeHeading>
    );
};

LargeHeading.defaultProps = {
    color: Colors.black,
    bgColor: "transparent",
    className: ""
};

const StyledNormalHeading = styled.h2`
    ${NormalHeadingStyle};
`;

export const NormalHeading = (props: Props) => {
    const { color, bgColor, className, children, ...passthrough } = props;
    return (
        <StyledNormalHeading color={color} bgColor={bgColor} className={className} {...passthrough}>
            {children}
        </StyledNormalHeading>
    );
};

NormalHeading.defaultProps = {
    color: Colors.black,
    bgColor: "transparent",
    className: ""
};

const StyledSmallHeading = styled.h3`
    ${SmallHeadingStyle};
`;

export const SmallHeading = (props: Props) => {
    const { color, bgColor, className, children, ...passthrough } = props;
    return (
        <StyledSmallHeading color={color} bgColor={bgColor} className={className} {...passthrough}>
            {children}
        </StyledSmallHeading>
    );
};

SmallHeading.defaultProps = {
    color: Colors.black,
    bgColor: "transparent",
    className: ""
};
