// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Constants
import { Measurements, Depths } from "Base/Constants";

// Components
import NavLinks from "Molecules/NavLinks";

// Assets
import LogoImg from "Assets/m_tao.png";

const HeaderContainer = styled.div`
    background-color: ${props => (props.heroFloat ? "transparent" : props.theme.black)};
    height: ${props => (props.heroFloat ? Measurements.headerHeight : Measurements.nonHeroHeaderHeight)};
    padding-left: ${Measurements.basePadding};
    padding-right: ${Measurements.basePadding};
    margin-top: ${props => (props.heroFloat ? Measurements.basePadding : 0)};
    margin-bottom: ${props => (props.heroFloat ? Measurements.basePadding : 0)};
    box-sizing: border-box;
    display: flex;
    position: ${props => (props.heroFloat ? "absolute" : "inherit")};
    width: 100%;
    z-index: ${Depths.highest};
`;

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const LogoLink = styled.img`
    height: ${Measurements.headerHeight};
    align-self: center;
`;

type Props = {
    className?: string,
    heroFloat?: boolean
};

export default function Header(props: Props) {
    const { className, heroFloat } = props;
    return (
        <HeaderContainer className={className} heroFloat={heroFloat}>
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
