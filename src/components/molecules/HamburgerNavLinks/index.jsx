// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Menu, X } from "react-feather";
import OnClickOutside from "react-onclickoutside";

// Constants
import { HeaderLinks } from "Base/Constants";
import MainTheme from "Base/MainTheme";

// Components
import StyledNavLink from "Atoms/NavLink";

// Types
import type { HeaderLink } from "Base/Constants";

// Styles
import NavLinkStyle from "Atoms/NavLink/NavLinkDefault.style";
import NavLinkVerticalStyle from "Atoms/NavLink/NavLinkVertical.style";
import HamburgerNavLinksContainerStyle from "./HamburgerNavLinksContainer.style";
import HamburgerToggleStyle from "./Hamburger.style";
import HamburgerLinksContainerStyle from "./HamburgerLinksContainer.style";

const HamburgerNavLinksContainer = styled.div`
    ${HamburgerNavLinksContainerStyle};
`;

const HamburgerToggleOn = styled(Menu)`
    ${HamburgerToggleStyle};
`;

const HamburgerToggleOff = styled(X)`
    ${HamburgerToggleStyle};
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

export default OnClickOutside(
    class NavLinks extends React.Component<any, State> {
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

        toggleHamburgerMenu = (e: SyntheticMouseEvent<*>) => {
            this.setState(prevState => ({ show: !prevState.show }));
            e.preventDefault();
            e.stopPropagation();
        };

        handleClickOutside = (evt: SyntheticMouseEvent<*>) => {
            const { show } = this.state;
            if (!show) {
                return;
            }
            this.setState({ show: false });
            evt.stopPropagation();
            evt.preventDefault();
        };

        render() {
            const { show } = this.state;
            return (
                <HamburgerNavLinksContainer {...this.props}>
                    {!show && (
                        <HamburgerToggleOn onClick={this.toggleHamburgerMenu} color={MainTheme.white} size={32} />
                    )}
                    {show && (
                        <HamburgerToggleOff onClick={this.toggleHamburgerMenu} color={MainTheme.white} size={32} />
                    )}
                    {show && <HamburgerLinksContainer show={show}>{this.getLinks(true)}</HamburgerLinksContainer>}
                </HamburgerNavLinksContainer>
            );
        }
    }
);
