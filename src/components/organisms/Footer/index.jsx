// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import { LargeHeading } from "Atoms/Heading";

const TempFooter = styled.footer`
    display: flex;
    min-height: 225px;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

export default function Footer() {
    return (
        <TempFooter>
            <LargeHeading color="white">Footer Placeholder</LargeHeading>
        </TempFooter>
    );
}
