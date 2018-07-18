// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import { LargeText } from "Atoms/StyledText";

const size: string = "200px";

const Primary = styled(LargeText)`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primaryColor};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const Secondary = styled(LargeText)`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.secondaryColor};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const Tertiary = styled(LargeText)`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.tertiaryColor};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const AccentLight = styled(LargeText)`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.accentLightColor};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const AccentDark = styled(LargeText)`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.accentDarkColor};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const Black = styled(LargeText)`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const White = styled(LargeText)`
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
    height: ${size};
    width: ${size};
    display: inline-block;
`;

const Container = styled.div`
    flex: 1;
`;

export default function() {
    return (
        <Container>
            <Primary>Primary</Primary>
            <Secondary>Secondary</Secondary>
            <Tertiary>Tertiary</Tertiary>
            <br />
            <AccentLight>Accent Light</AccentLight>
            <AccentDark>Accent Dark</AccentDark>
            <br />
            <Black>Black</Black>
            <White>White</White>
        </Container>
    );
}
