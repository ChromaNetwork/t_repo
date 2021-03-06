// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Constants
import { ImageAssets } from "Base/Constants";

// Components
import HeaderNavLinks from "Molecules/HeaderNavLinks";

// Styles
import HeaderContainerStyle from "./HeaderContainer.style";
import LogoContainerStyle from "./LogoContainer.style";
import LogoStyle from "./Logo.style";
import NavLinksExtendedStyle from "./NavLinksExtended.style";

const HeaderContainer = styled.div`
    ${HeaderContainerStyle};
`;

const LogoContainer = styled.div`
    ${LogoContainerStyle};
`;

const LogoLink = styled.img`
    ${LogoStyle};
`;

const StyledNavLinks = styled(HeaderNavLinks)`
    ${NavLinksExtendedStyle};
`;

export default function Header(props: mixed) {
    return (
        <HeaderContainer {...props}>
            <LogoContainer>
                <Link to="/">
                    <LogoLink src={ImageAssets.TaoLogoFull.srcDefault} alt="Tao Network" />
                </Link>
            </LogoContainer>
            <StyledNavLinks />
        </HeaderContainer>
    );
}
