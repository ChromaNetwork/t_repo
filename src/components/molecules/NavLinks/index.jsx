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
import NavLinkStyle from "Atoms/StyledNavLink/style";
import NavLinksContainerStyle from "./NavLinksContainer.style";

const NavLinksContainer = styled.nav`
    ${NavLinksContainerStyle};
`;

// If the link goes to an external resource, need to use <a> insted of <Link>
const StyledAnchor = styled.a`
    ${NavLinkStyle};
`;

type Props = {
    className?: string
};

export default function NavLinks(props: Props) {
    const { className } = props;
    return (
        <NavLinksContainer className={className}>
            {HeaderLinks.map((link: HeaderLink) => {
                if (link.external) {
                    return (
                        <StyledAnchor key={link.label} href={link.url}>
                            {link.label}
                        </StyledAnchor>
                    );
                }
                return <StyledNavLink key={link.label} label={link.label} to={link.url} />;
            })}
        </NavLinksContainer>
    );
}

NavLinks.defaultProps = {
    className: ""
};
