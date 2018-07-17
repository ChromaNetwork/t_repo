// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import NavLinks from "Molecules/NavLinks";
import HamburgerNavLinks from "Molecules/HamburgerNavLinks";

// Styles
import NavLinksContainerStyle from "./NavLinksContainer.style";

const NavLinksContainer = styled.div`
    ${NavLinksContainerStyle};
`;

export default function HeaderNavLinks(props: {}) {
    return (
        <NavLinksContainer {...props}>
            <NavLinks />
            <HamburgerNavLinks />
        </NavLinksContainer>
    );
}
