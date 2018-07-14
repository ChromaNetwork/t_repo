// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Constants
import { Measurements, HeaderLinks } from "Base/Constants";

// Components
import StyledNavLink from "Atoms/StyledNavLink";

// Assets
import LogoImg from "Assets/m_tao.png";

// Types
import type { HeaderLink } from "Base/Constants";

// Styles
import NavLinkStyle from "Atoms/StyledNavLink/style";

const HeaderContainer = styled.div`
    background-color: ${props => props.bgColor};
    height: ${Measurements.headerHeight};
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    box-sizing: border-box;
    display: flex;
    position: ${props => (props.heroFloat ? "absolute" : "inheirit")};
    width: 100%;
`;

const NavLinksContainer = styled.nav`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`;

const StyledAnchor = styled.a`
    ${NavLinkStyle};
`;

const LogoLink = styled.img`
    height: ${Measurements.headerHeight};
`;

type Props = {
    className?: string,
    heroFloat?: boolean,
    bgColor?: string
};

export default function Header(props: Props) {
    const { className, heroFloat, bgColor } = props;
    return (
        <HeaderContainer className={className} heroFloat={heroFloat} bgColor={bgColor}>
            <LogoContainer>
                <Link to="/">
                    <LogoLink src={LogoImg} alt="Tao Network" />
                </Link>
            </LogoContainer>
            <NavLinksContainer>
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
        </HeaderContainer>
    );
}

Header.defaultProps = {
    className: "",
    heroFloat: false,
    bgColor: "transparent"
};
