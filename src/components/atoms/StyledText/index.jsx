// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants
import { Colors } from "Base/Constants";

// Types
import type { Node } from "react";

// Styles
import LargeTextStyle from "./LargeText.style";
import NormalTextStyle from "./NormalText.style";
import SmallTextStyle from "./Smalltext.style";

type Props = {
    className?: string,
    color?: string,
    bgColor?: string,
    children: Node
};

const StyledLargeText = styled.p`
    ${LargeTextStyle};
`;

export const LargeText = (props: Props) => {
    const { color, bgColor, className, children, ...passThrough } = props;
    return (
        <StyledLargeText color={color} bgColor={bgColor} className={className} {...passThrough}>
            {children}
        </StyledLargeText>
    );
};

LargeText.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};

const StyledNormalText = styled.p`
    ${NormalTextStyle};
`;

export const NormalText = (props: Props) => {
    const { color, bgColor, className, children, ...passThrough } = props;
    return (
        <StyledNormalText color={color} bgColor={bgColor} className={className} {...passThrough}>
            {children}
        </StyledNormalText>
    );
};

NormalText.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};

const StyledSmallText = styled.p`
    ${SmallTextStyle};
`;

export const SmallText = (props: Props) => {
    const { color, bgColor, className, children, ...passthrough } = props;
    return (
        <StyledSmallText color={color} bgColor={bgColor} className={className} {...passthrough}>
            {children}
        </StyledSmallText>
    );
};

SmallText.defaultProps = {
    color: Colors.black,
    bgColor: Colors.white,
    className: ""
};
