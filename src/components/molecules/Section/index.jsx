// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Components
import ArrowHeading from "Molecules//ArrowHeading";

// Styles
import SectionStyle from "./style";

const StyledSection = styled.div`
    ${SectionStyle};
`;

type Props = {
    background?: boolean,
    title?: string,
    titleAlign?: "left" | "right" | "center",
    children?: Node
};

export default function Section(props: Props) {
    const { children, title, titleAlign, ...passthrough } = props;
    return (
        <Fragment>
            {title && <ArrowHeading text={title} align={titleAlign || Section.defaultProps.titleAlign} />}
            <StyledSection {...passthrough}>{children}</StyledSection>
        </Fragment>
    );
}

Section.defaultProps = {
    background: false,
    title: "",
    titleAlign: "left",
    children: null
};
