// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Constants
import MainTheme from "Base/MainTheme";
// import { Measurements } from "Base/Constants";

// Styles
import NavLinkStyle from "./NavLinkDefault.style";
import NavLinkVerticalStyle from "./NavLinkVertical.style";

type Props = {
    className?: string,
    label: string,
    to: string,
    vertical?: boolean
};

const StyledNavLinkComponent = styled(NavLink)`
    && {
        ${NavLinkStyle};
    }
`;

const StyleNavLinkVerticalComponent = styled(NavLink)`
    && {
        ${NavLinkVerticalStyle};
    }
`;

export default function StyledNavLink(props: Props) {
    const { className, label, to, vertical, ...passthrough } = props;
    return vertical ? (
        <StyleNavLinkVerticalComponent
            className={className}
            exact
            to={to}
            activeStyle={{
                paddingBottom: "5px 0",
                borderBottom: `solid 5px ${MainTheme.accentLightColor}`
            }}
            {...passthrough}
        >
            {label}
        </StyleNavLinkVerticalComponent>
    ) : (
        <StyledNavLinkComponent
            className={className}
            exact
            to={to}
            activeStyle={{
                paddingBottom: 0,
                borderBottom: `solid 5px ${MainTheme.accentLightColor}`
            }}
            {...passthrough}
        >
            {label}
        </StyledNavLinkComponent>
    );
}

StyledNavLink.defaultProps = {
    className: "",
    vertical: false
};
