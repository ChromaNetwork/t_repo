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
    text: string,
    align?: "left" | "right" | "center",
    textSize?: Size,
    textColor?: string,
    textAlign?: "left" | "center" | "right" | "justify"
};

const Container = styled.div`
    ${ContainerStyle};
`;

const HeadingContainer = styled.div`
    && {
        display: flex;
        flex-direction: row;
        text-align: left;
    }
`;

export default function Section(props: Props) {
    const { align, header, headerSize, text, textSize, textColor, textAlign, ...passthrough } = props;
    const Heading = GetHeading(header, headerSize, align || Section.defaultProps.align);
    const Text = GetText(text, textSize, textColor, textAlign);
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
    textSize: "normal",
    textColor: MainTheme.black,
    align: "left",
    textAlign: "left"
};

function GetHeading(
    header: string = "",
    headerSize: Size = Section.defaultProps.headerSize,
    align: "left" | "right" | "center"
): Node {
    if (!header) {
        return null;
    }
    switch (headerSize) {
        case "large":
            return (
                <Fragment>
                    <LargeHeading align={align} style={{ width: "100%" }}>
                        {header}
                    </LargeHeading>
                </Fragment>
            );
        case "normal":
            return (
                <Fragment>
                    <NormalHeading align={align} style={{ width: "100%" }}>
                        {header}
                    </NormalHeading>
                </Fragment>
            );
        case "small":
            return (
                <Fragment>
                    <SmallHeading align={align} style={{ width: "100%" }}>
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
    textColor: string = Section.defaultProps.textColor,
    textAlign: string = Section.defaultProps.textAlign
): Node {
    if (!text) {
        return null;
    }
    switch (textSize) {
        case "large":
            return (
                <LargeText color={textColor} style={{ textAlign }}>
                    {text}
                </LargeText>
            );
        case "normal":
            return (
                <NormalText color={textColor} style={{ textAlign }}>
                    {text}
                </NormalText>
            );
        case "small":
            return (
                <SmallText color={textColor} style={{ textAlign }}>
                    {text}
                </SmallText>
            );
        default:
            return null;
    }
}
