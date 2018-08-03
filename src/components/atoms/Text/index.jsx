// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Types
import type { Node } from "react";

// Styles
import LargeTextStyle from "./LargeText.style";
import NormalTextStyle from "./NormalText.style";
import SmallTextStyle from "./Smalltext.style";

type Props = {
    className?: string,
    children: Node
};

const StyledLargeText = styled.p`
    ${LargeTextStyle};
`;

export const LargeText = (props: Props) => {
    const { children, ...passThrough } = props;
    return <StyledLargeText {...passThrough}>{children}</StyledLargeText>;
};

LargeText.defaultProps = {
    className: ""
};

const StyledNormalText = styled.p`
    ${NormalTextStyle};
`;

export const NormalText = (props: Props) => {
    const { children, ...passThrough } = props;
    return <StyledNormalText {...passThrough}>{children}</StyledNormalText>;
};

NormalText.defaultProps = {
    className: ""
};

const StyledSmallText = styled.p`
    ${SmallTextStyle};
`;

export const SmallText = (props: Props) => {
    const { children, ...passthrough } = props;
    return <StyledSmallText {...passthrough}>{children}</StyledSmallText>;
};

SmallText.defaultProps = {
    className: ""
};
