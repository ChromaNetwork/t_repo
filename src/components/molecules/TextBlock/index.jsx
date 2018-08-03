// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Constants
import MainTheme from "Base/MainTheme";

// Components
import { LargeHeading, NormalHeading, SmallHeading } from "Atoms/Heading";
import { LargeText, NormalText, SmallText } from "Atoms/Text";

// Styles
import ContainerStyle from "./Container.style";

type Size = "large" | "normal" | "small";

type Props = {
    header?: string,
    headerSize?: Size,
    headerColor?: string,
    text: string,
    align?: "left" | "right" | "center",
    textSize?: Size,
    textColor?: string,
    centerHeader?: boolean
};

const Container = styled.div`
    ${ContainerStyle};
`;

const HeadingContainer = styled.div`
    && {
        text-align: left;
    }
`;

export default function Section(props: Props) {
    const { align, header, headerSize, text, textSize, headerColor, textColor, ...passthrough } = props;
    const Heading = GetHeading(header, headerSize, headerColor, align || Section.defaultProps.align);
    const Text = GetText(text, textSize, textColor);
    return (
        <Container {...passthrough}>
            <HeadingContainer>{Heading}</HeadingContainer>
            {Text}
        </Container>
    );
}

Section.defaultProps = {
    header: "",
    headerSize: "normal",
    headerColor: MainTheme.black,
    textSize: "normal",
    textColor: MainTheme.black,
    centerHeader: false,
    align: "left"
};

function GetHeading(
    header: string = "",
    headerSize: Size = Section.defaultProps.headerSize,
    headerColor: string = Section.defaultProps.headerColor,
    align: "left" | "right" | "center"
): Node {
    if (!header) {
        return null;
    }
    switch (headerSize) {
        case "large":
            return (
                <Fragment>
                    <LargeHeading align={align} color={headerColor}>
                        {header}
                    </LargeHeading>
                </Fragment>
            );
        case "normal":
            return (
                <Fragment>
                    <NormalHeading align={align} color={headerColor}>
                        {header}
                    </NormalHeading>
                </Fragment>
            );
        case "small":
            return (
                <Fragment>
                    <SmallHeading align={align} color={headerColor}>
                        {header}
                    </SmallHeading>
                </Fragment>
            );
        default:
            return null;
    }
}

function GetText(
    text: string = "",
    textSize: Size = Section.defaultProps.textSize,
    textColor: string = Section.defaultProps.textColor
): Node {
    if (!text) {
        return null;
    }
    switch (textSize) {
        case "large":
            return <LargeText color={textColor}>{text}</LargeText>;
        case "normal":
            return <NormalText color={textColor}>{text}</NormalText>;
        case "small":
            return <SmallText color={textColor}>{text}</SmallText>;
        default:
            return null;
    }
}
