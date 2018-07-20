// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Constants
import MainTheme from "Base/MainTheme";

// Components
import Separator from "Atoms/Separator";
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
    textSize?: Size,
    textColor?: string,
    centerHeader?: boolean,
    separator?: boolean
};

const Container = styled.div`
    ${ContainerStyle};
`;

const HeadingContainer = styled.div`
    && {
        text-align: left;
    }
`;

const StyledLargeHeading = styled(LargeHeading)`
    margin-bottom: 15px;
`;

const StyledNormalHeading = styled(NormalHeading)`
    margin-bottom: 15px;
`;

const StyledSmallHeading = styled(SmallHeading)`
    margin-bottom: 15px;
`;

export default function Section(props: Props) {
    const { separator, header, headerSize, text, textSize, headerColor, textColor, ...passthrough } = props;
    const Heading = GetHeading(header, headerSize, headerColor, separator);
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
    separator: false
};

function GetHeading(
    header: string = "",
    headerSize: Size = Section.defaultProps.headerSize,
    headerColor: string = Section.defaultProps.headerColor,
    separator: boolean = false
): Node {
    if (!header) {
        return null;
    }
    switch (headerSize) {
        case "large":
            return (
                <Fragment>
                    <StyledLargeHeading color={headerColor}>{header}</StyledLargeHeading>
                    {separator && <Separator />}
                </Fragment>
            );
        case "normal":
            return (
                <Fragment>
                    <StyledNormalHeading color={headerColor}>{header}</StyledNormalHeading>
                    {separator && <Separator />}
                </Fragment>
            );
        case "small":
            return (
                <Fragment>
                    <StyledSmallHeading color={headerColor}>{header}</StyledSmallHeading>
                    {separator && <Separator />}
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
