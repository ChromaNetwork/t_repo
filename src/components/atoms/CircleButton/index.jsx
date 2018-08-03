// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import * as Feather from "react-feather";

// Constants
import MainTheme from "Base/MainTheme";

// Styles
import CircleButtonStyle from "./style";

type Props = {
    onClick: () => mixed,
    className?: string,
    size?: "large" | "normal" | "small",
    iconName?: string,
    blue?: boolean
};

const StyledCircleButton = styled.button`
    ${CircleButtonStyle};
`;

const sizes = {
    small: 22,
    normal: 32,
    large: 40
};

export default function CircleButton(props: Props) {
    const { blue, size, iconName, ...passThrough } = props;
    const Icon = iconName ? Feather[iconName] : "";
    return (
        <StyledCircleButton blue={blue} role="button" size={size} {...passThrough}>
            {iconName && <Icon color={blue ? MainTheme.white : MainTheme.black} size={sizes[size || "normal"]} />}
        </StyledCircleButton>
    );
}

CircleButton.defaultProps = {
    className: "",
    size: "normal",
    iconName: "",
    blue: false
};
