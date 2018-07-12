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

const StyledText = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
`;

const StyledLargeText = StyledText.extend`
    font-size: ${FontSizes.largeText};
`;

export const LargeText = (props: Props) => {
    const { color, bgColor, className, children } = props;
    return (
        <StyledLargeText color={color} bgColor={bgColor} className={className}>
            {children}
        </StyledLargeText>
    );
};

LargeText.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};

const StyledNormalText = StyledText.extend`
    font-size: ${FontSizes.normalText};
`;

export const NormalText = (props: Props) => {
    const { color, bgColor, className, children } = props;
    return (
        <StyledNormalText color={color} bgColor={bgColor} className={className}>
            {children}
        </StyledNormalText>
    );
};

NormalText.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};

const StyledSmallText = StyledText.extend`
    font-size: ${FontSizes.smallText};
`;

export const SmallText = (props: Props) => {
    const { color, bgColor, className, children } = props;
    return (
        <StyledSmallText color={color} bgColor={bgColor} className={className}>
            {children}
        </StyledSmallText>
    );
};

SmallText.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};
