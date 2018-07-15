// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Menu, X } from "react-feather";

// Constants
import { HeaderLinks } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import StyledNavLink from "Atoms/StyledNavLink";

// Types
import type { HeaderLink } from "Base/Constants";

// Styles
import NavLinkStyle from "Atoms/StyledNavLink/NavLinkDefault.style";
import NavLinkVerticalStyle from "Atoms/StyledNavLink/NavLinkVertical.style";
import NavLinksContainerStyle from "./NavLinksContainer.style";
import HamburgerToggleStyle from "./Hamburger.style";
import LinksContainerStyle from "./LinksContainer.style";
import HamburgerLinksContainerStyle from "./HamburgerLinksContainer.style";

const NavLinksContainer = styled.div`
    ${NavLinksContainerStyle};
`;

const HamburgerToggleOn = styled(Menu)`
    ${HamburgerToggleStyle};
`;

const HamburgerToggleOff = styled(X)`
    ${HamburgerToggleStyle};
`;

const LinksContainer = styled.nav`
    ${LinksContainerStyle};
`;

const HamburgerLinksContainer = styled.nav`
    ${HamburgerLinksContainerStyle};
`;

// If the link goes to an external resource, need to use <a> insted of <Link>
const StyledAnchor = styled.a`
    ${NavLinkStyle};
`;

const StyledAnchorVertical = styled.a`
    ${NavLinkVerticalStyle};
`;

type State = {
    show: boolean
};

export default class NavLinks extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false
        };
    }

    getLinks = (vertical: boolean): Array<any> =>
        HeaderLinks.map((link: HeaderLink) => {
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

    toggleHamburgerMenu = () => {
        this.setState(prevState => ({ show: !prevState.show }));
    };

    render() {
        const { show } = this.state;
        return (
            <NavLinksContainer {...this.props}>
                <LinksContainer>{this.getLinks(false)}</LinksContainer>
                {!show && <HamburgerToggleOn onClick={this.toggleHamburgerMenu} color={MainTheme.white} size={28} />}
                {show && <HamburgerToggleOff onClick={this.toggleHamburgerMenu} color={MainTheme.white} size={28} />}
                {show && <HamburgerLinksContainer>{this.getLinks(true)}</HamburgerLinksContainer>}
            </NavLinksContainer>
        );
    }
}
