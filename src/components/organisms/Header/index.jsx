// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import NavLinks from "Molecules/NavLinks";

// Assets
import LogoImg from "Assets/m_tao.png";

// Styles
import HeaderContainerStyle from "./HeaderContainer.style";
import LogoContainerStyle from "./LogoContainer.style";
import LogoStyle from "./Logo.style";

const HeaderContainer = styled.div`
    ${HeaderContainerStyle};
`;

const LogoContainer = styled.div`
    ${LogoContainerStyle};
`;

const LogoLink = styled.img`
    ${LogoStyle};
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
            <NavLinks />
        </HeaderContainer>
    );
}

Header.defaultProps = {
    className: "",
    heroFloat: false
};
