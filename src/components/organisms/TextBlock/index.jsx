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
import { LargeHeading, NormalHeading, SmallHeading } from "Atoms/StyledHeading";
import { LargeText, NormalText, SmallText } from "Atoms/StyledText";

// Styles
import ContainerStyle from "./Container.style";
import TextStyle from "./Text.style";

type Size = "large" | "normal" | "small";

type Props = {
    header?: string,
    headerSize?: Size,
    headerColor?: string,
    text: string,
    textSize?: Size,
    textColor?: string
};

const Container = styled.div`
    ${ContainerStyle};
`;

const StyledLargeText = styled(LargeText)`
    && {
        ${TextStyle};
    }
`;

const StyledNormalText = styled(NormalText)`
    && {
        ${TextStyle};
    }
`;

const StyledSmallText = styled(SmallText)`
    && {
        ${TextStyle};
    }
`;

export default function Section(props: Props) {
    const { header, headerSize, text, textSize, headerColor, textColor, ...passthrough } = props;
    const Heading = GetHeading(header, headerSize, headerColor);
    const Text = GetText(text, textSize, textColor);
    return (
        <Container {...passthrough}>
            {Heading}
            {Text}
        </Container>
    );
}

Section.defaultProps = {
    header: "",
    headerSize: "normal",
    headerColor: MainTheme.black,
    textSize: "normal",
    textColor: MainTheme.black
};

function GetHeading(
    header: string = "",
    headerSize: Size = Section.defaultProps.headerSize,
    headerColor: string = Section.defaultProps.headerColor
): Node {
    if (!header) {
        return null;
    }
    switch (headerSize) {
        case "large":
            return (
                <Fragment>
                    <LargeHeading color={headerColor}>{header}</LargeHeading>
                    <Separator />
                </Fragment>
            );
        case "normal":
            return (
                <Fragment>
                    <NormalHeading color={headerColor}>{header}</NormalHeading>
                    <Separator />
                </Fragment>
            );
        case "small":
            return (
                <Fragment>
                    <SmallHeading color={headerColor}>{header}</SmallHeading>
                    <Separator />
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
            return <StyledLargeText color={textColor}>{text}</StyledLargeText>;
        case "normal":
            return <StyledNormalText color={textColor}>{text}</StyledNormalText>;
        case "small":
            return <StyledSmallText color={textColor}>{text}</StyledSmallText>;
        default:
            return null;
    }
}
