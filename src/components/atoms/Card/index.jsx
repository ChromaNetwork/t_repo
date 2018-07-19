// @flow

// node_Modules
import React from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Styles
import CardContainerStyle from "./style";

type Props = {
    level: 1 | 2 | 3 | 4 | 5,
    className?: "",
    hover?: boolean,
    onClick?: () => mixed,
    children?: Node
};

const CardContainer = styled.div`
    ${CardContainerStyle};
`;

export default function Card(props: Props) {
    const { children, ...passthrough } = props;
    return <CardContainer {...passthrough}>{children}</CardContainer>;
}

Card.defaultProps = {
    className: "",
    children: null,
    hover: false,
    onClick: () => {}
};
