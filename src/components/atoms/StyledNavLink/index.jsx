// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Constants
import MainTheme from "Base/MainTheme";
// import { Measurements } from "Base/Constants";

// Styles
import NavLinkStyle from "./style";

type Props = {
    className?: string,
    label: string,
    to: string
};

const StyledNavLinkComponent = styled(NavLink)`
    && {
        ${NavLinkStyle};
    }
`;

export default function StyledNavLink(props: Props) {
    const { className, label, to } = props;
    return (
        <StyledNavLinkComponent
            className={className}
            exact
            to={to}
            activeStyle={{
                borderBottomStyle: "solid",
                borderBottomWidth: "5px",
                borderBottomColor: MainTheme.accentLightColor,
                boxSizing: "border-box",
                height: "50%"
            }}
        >
            {label}
        </StyledNavLinkComponent>
    );
}

StyledNavLink.defaultProps = {
    className: ""
};
