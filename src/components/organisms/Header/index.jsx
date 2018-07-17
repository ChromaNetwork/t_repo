// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import HeaderNavLinks from "Molecules/HeaderNavLinks";

// Assets
import LogoImg from "Assets/m_tao.png";

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

type Props = {
    className?: string,
    heroFloat?: boolean
};

export default function Header(props: Props) {
    const { className, heroFloat, ...passthrough } = props;
    return (
        <HeaderContainer className={className} heroFloat={heroFloat} {...passthrough}>
            <LogoContainer>
                <Link to="/">
                    <LogoLink src={LogoImg} alt="Tao Network" />
                </Link>
            </LogoContainer>
            <StyledNavLinks />
        </HeaderContainer>
    );
}

Header.defaultProps = {
    className: "",
    heroFloat: false
};
