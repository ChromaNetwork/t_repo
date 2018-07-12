// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants
import { Colors, FontSizes } from "Base/Constants";

// Types
import type { Node } from "react";

type Props = {
    className?: string,
    color?: string,
    bgColor?: string,
    children: Node
};

const StyledLargeHeading = styled.h1`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    font-size: ${FontSizes.largeHeading};
`;

export const LargeHeading = (props: Props) => {
    const { color, bgColor, className, children } = props;
    return (
        <StyledLargeHeading color={color} bgColor={bgColor} className={className}>
            {children}
        </StyledLargeHeading>
    );
};

LargeHeading.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};

const StyledNormalHeading = styled.h2`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    font-size: ${FontSizes.normalHeading};
`;

export const NormalHeading = (props: Props) => {
    const { color, bgColor, className, children } = props;
    return (
        <StyledNormalHeading color={color} bgColor={bgColor} className={className}>
            {children}
        </StyledNormalHeading>
    );
};

NormalHeading.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};

const StyledSmallHeading = styled.h3`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    font-size: ${FontSizes.smallHeading};
`;

export const SmallHeading = (props: Props) => {
    const { color, bgColor, className, children } = props;
    return (
        <StyledSmallHeading color={color} bgColor={bgColor} className={className}>
            {children}
        </StyledSmallHeading>
    );
};

SmallHeading.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};
