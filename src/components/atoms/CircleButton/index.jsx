// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import * as Feather from "react-feather";
import * as FontAwesome from "react-icons/fa";

// Constants
import MainTheme from "Base/MainTheme";

// Styles
import CircleButtonStyle from "./style";

type Props = {
    onClick?: () => mixed,
    className?: string,
    size?: "jumbo" | "large" | "normal" | "small",
    iconName?: string,
    blue?: boolean,
    href?: ?string
};

const StyledCircleButton = styled.a`
    ${CircleButtonStyle};
`;

const sizes = {
    small: 22,
    normal: 32,
    large: 36,
    jumbo: 125
};

export default function CircleButton(props: Props) {
    const { blue, size, iconName, ...passThrough } = props;
    let Icon = iconName ? Feather[iconName] : "";
    Icon = Icon ? Icon : FontAwesome[iconName];
    return (
        <StyledCircleButton blue={blue} size={size} {...passThrough}>
            {iconName && <Icon color={blue ? MainTheme.white : MainTheme.black} size={sizes[size || "normal"]} />}
        </StyledCircleButton>
    );
}

CircleButton.defaultProps = {
    className: "",
    size: "normal",
    iconName: "",
    blue: false,
    onClick: () => {},
    href: null
};
