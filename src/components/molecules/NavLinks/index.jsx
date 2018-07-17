// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Constants
import { HeaderLinks } from "Base/Constants";

// Components
import StyledNavLink from "Atoms/StyledNavLink";

// Types
import type { HeaderLink } from "Base/Constants";

// Styles
import NavLinkStyle from "Atoms/StyledNavLink/NavLinkDefault.style";
import NavLinkVerticalStyle from "Atoms/StyledNavLink/NavLinkVertical.style";
import NavLinksContainerStyle from "./NavLinksContainer.style";
import LinksContainerStyle from "./LinksContainer.style";

const NavLinksContainer = styled.div`
    ${NavLinksContainerStyle};
`;

const LinksContainer = styled.nav`
    ${LinksContainerStyle};
`;

// If the link goes to an external resource, need to use <a> insted of <Link>
const StyledAnchor = styled.a`
    ${NavLinkStyle};
`;

const StyledAnchorVertical = styled.a`
    ${NavLinkVerticalStyle};
`;

export default function NavLinks(props: {}) {
    return (
        <NavLinksContainer {...props}>
            <LinksContainer>{getLinks(false)}</LinksContainer>
        </NavLinksContainer>
    );
}

function getLinks(vertical: boolean): Array<any> {
    return HeaderLinks.map((link: HeaderLink) => {
        if (link.external) {
            return vertical ? (
                <StyledAnchorVertical key={link.label} href={link.url}>
                    {link.label}
                </StyledAnchorVertical>
            ) : (
                <StyledAnchor key={link.label} href={link.url}>
                    {link.label}
                </StyledAnchor>
            );
        }
        return <StyledNavLink vertical={vertical} key={link.label} label={link.label} to={link.url} />;
    });
}
